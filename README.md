# react-native-gin-boilerplate

Boilerplate for React Native

## Installation

### Step 1: Install **RN Device Info**, **FastImage** libs

These libs use native lib so that you have to install it.

```sh
yarn add react-native-svg
yarn add react-native-modal
yarn add react-native-fast-image
yarn add react-native-device info
yarn add @react-navigation/native
yarn add react-native-toast-message
yarn add react-native-safe-area-context
```

### Step 2: Install Boilerplate

```sh
yarn add react-native-gin-boilerplate
```

## Usage

### I. Modal Component

If you want to use **openLoading**, **closeLoading** functions. You must add these lines to root file.

```js
import { Loading, loadingRef } from 'react-native-gin-boilerplate';
<Loading ref={loadingRef} />
```

Like Loading, you alse import and add **AlertModal** and **GlobalModal** to use **openAlert**, **closeAlert**, **openGlobalModal**, **closeGlobalModal**.

```js
import { AlertModal, alertModalRef, globalModalRef, GlobalModal } from 'react-native-gin-boilerplate';
<AlertModal ref={alertModalRef}/>
<GlobalModal ref={globalModalRef}/>
```

### II. Themes

To apply theme for the whole component, you must create new file and name it is: **colors.ts**
Its format is:

```js
const colors = {
  light: {
    mainBackground: '#ffffff',
    headerBorder: '#B2B2B2',
    headerBackground: '#FFFFFF',
    headerTintColor: '#f8f8f8',
    headerTitleColor: '#000000',
    backgroundColor: '#f8f8f8',
    borderColor: '#D6DEDF',
    defaultText: '#231f20',
    activeColor: '#1abfd1',
    disabledButton: '#B3B3B3',
    primaryColor: '#1fc7d4',
    infoColor: '#1d74f5',
    dangerColor: '#B43236',
    warningColor: '#ffbb00',
    successColor: '#0F6A4B',
    buttonText: '#ffffff',
    separatorBackground: '#DFDFDF',
    menuText: '#4D4849',
    inputActiveBorder: '#21929E',
    inputInactiveBorder: '#D2D1D1',
    inputHasValue: '#181414',
    noDataText: '#697479',
  },
  dark: {
    inputHasValue: '#181414',
    inputActiveBorder: '#21929E',
    inputInactiveBorder: '#D2D1D1',
    menuText: '#4D4849',
    mainBackground: '#ffffff',
    separatorBackground: '#DFDFDF',
    headerBorder: '#B2B2B2',
    headerBackground: '#FFFFFF',
    headerTintColor: '#f8f8f8',
    headerTitleColor: '#000000',
    backgroundColor: '#f8f8f8',
    borderColor: '#D6DEDF',
    defaultText: '#231f20',
    activeColor: '#1abfd1',
    disabledButton: '#B3B3B3',
    primaryColor: '#1fc7d4',
    infoColor: '#1d74f5',
    dangerColor: '#f5455c',
    warningColor: '#ffbb00',
    successColor: '#0F6A4B',
    buttonText: '#ffffff',
    noDataText: '#697479',
  },
};
```

After that, you need add these lines to the root file:

```js
// import your colors file that you defined before.
import {TSupportedThemes, IThemeContextProps, ThemeContext} from 'react-native-gin-boilerplate';

const [theme, setTheme] = useState<TSupportedThemes>('light');

const value: IThemeContextProps = {
  colors: colors[theme],
  theme: theme
}
<ThemeContext.Provider value={value}>
  // Your components
</ThemeContext.Provider>
```

### III. Hooks

1. **useBackHardware**

2. **useChangeStatusBar**

3. **useCountdown**

4. **useCountNumberDown**

5. **useGetList**

6. **useNavBeforeRemove**

### IV. HOC

1. **withKeyboardAvoidingView**

2. **withPopup**

### V. Components

1. atoms: **Button**, **Picker**, **Text**, **AutoImage**, **EmptyComponent**, **NoData**, **RefreshControl**, **Separator**, **StatusBar**

2. molecules: **Loading**, **Modal**

3. organims: **FlexView**, **RowContainer**, **ViewCondition**

### VI. Utils

General Utils such as: **UDevice, UDimension, UMessage, UNavigation, UTextStyle, UTheme**

General methods such as: **Logger, mAnimated, mDate**

### VII. Config

1. **NavConfig**

2. **StackAnimation**

3. **StackConfig**

4. **Storage**

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
