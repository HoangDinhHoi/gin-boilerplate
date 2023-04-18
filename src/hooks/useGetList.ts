import type { IMeta, IResponse } from '../definitions';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { closeLoading, openLoading } from '../components/molecules';

export interface IPayloadGetList {
  page: number;
  limit: number;
}

export interface IOptionsGetList {
  isTrigger?: boolean;
  isUseFocus?: boolean;
  isShowLoading?: boolean;
}

function useGetList<T extends Partial<IPayloadGetList>, D extends object>(
  func: (payload: T) => Promise<IResponse<D[]>>,
  payload: T,
  options?: IOptionsGetList
) {
  const isTrigger = options?.isTrigger ?? true;
  const isUseFocus = options?.isUseFocus ?? false;
  const isShowLoading = options?.isShowLoading ?? true;
  const [currentPage, setCurrentPage] = useState<number>(payload?.page ?? 1);
  const [nextPage, setNextPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<D[]>([]);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
  const [meta, setMeta] = useState<IMeta>({
    page: 1,
    total: 1,
    limit: 10,
    currentPage: 1,
    totalFiltered: 1,
  });

  const onGetDataWithoutLoading = () => {
    func({ page: currentPage, ...payload })
      .then((res) => {
        if (isLoadMore) {
          const tmp = [...data].concat([...(res?.data ?? [])]);
          setData(tmp);
        } else {
          setData(res.data ?? data);
        }
        if (res.metadata) {
          setNextPage(
            currentPage < Math.ceil(res.metadata.total / res.metadata.limit)
              ? currentPage + 1
              : currentPage
          );
        }
        setMeta(res.metadata ?? meta);
        setIsLoading(false);
        setIsLoadMore(false);
        if (isShowLoading) {
          closeLoading();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setIsLoadMore(false);
        if (isShowLoading) {
          closeLoading();
        }
      });
  };

  const getData = () => {
    setIsLoading(true);
    if (isShowLoading) {
      openLoading();
    }
    onGetDataWithoutLoading();
  };

  const onRefresh = () => {
    setCurrentPage(1);
    if (currentPage === 1) {
      setIsForceUpdate(!isForceUpdate);
    }
  };

  const onLoadMore = () => {
    if (currentPage < nextPage) {
      setIsLoadMore(true);
      setCurrentPage(nextPage);
    }
  };

  const onGetData = () => {
    if (isTrigger) {
      getData();
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isUseFocus) {
        onGetData();
      }
    }, [currentPage, isForceUpdate])
  );
  useEffect(() => {
    if (!isUseFocus) {
      onGetData();
    }
  }, [currentPage, isForceUpdate]);

  return {
    onGetData,
    data,
    meta,
    setData,
    nextPage,
    onRefresh,
    isLoading,
    onLoadMore,
    isLoadMore,
    currentPage,
    setIsLoadMore,
    isForceUpdate,
    setCurrentPage,
    setIsForceUpdate,
    onGetDataWithoutLoading,
  };
}

export default useGetList;
