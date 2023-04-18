import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackHardware = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
};

export default useBackHardware;
