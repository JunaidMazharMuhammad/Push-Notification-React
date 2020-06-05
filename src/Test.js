import React from "react";
import { messaging } from "./init-fcm";

class Test extends React.Component {
  componentDidMount() {
    messaging
      .requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
        console.log(token);
       // setToken(token);
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
  }
  render() {
    navigator.serviceWorker.addEventListener("message", ({ data }) =>
      makeNotification(data["firebase-messaging-msg-data"].data)
    );
    const makeNotification = (data) =>
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification(data.title, {
          body: data.detail,
          icon: "/logo512.png",
          vibrate: [100, 50, 100],
          data: { primaryKey: 1 },
        });
      });

    return <h1>Hello</h1>;
  }
}

export default Test;
