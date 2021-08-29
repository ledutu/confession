import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.replace(name, params);
  }
}

export function pop(count) {
  if (navigationRef.isReady()) {
    navigationRef.pop(count);
  }
}

export function reset(index, name, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index,
      routes: [{name, params}],
    });
  }
}
