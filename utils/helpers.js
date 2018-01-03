import { AsyncStorage, StyleSheet, Platform } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'mobile-flashcards:notifications';

export function createPlatformStyle(styles) {
  const platformStyles = {};

  Object.keys(styles).forEach((name) => {
    // eslint-disable-next-line prefer-const
    let { ios, android, ...style } = { ...styles[name] };

    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios };
    } else if (android && Platform.OS === 'android') {
      style = { ...style, ...android };
    }

    platformStyles[name] = style;
  });

  return StyleSheet.create(platformStyles);
}

function createNotification() {
  return {
    title: 'Study your Decks!',
    body: "👋  don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
