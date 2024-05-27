# rmp_flutter_webview

## Using Radiant Media Player to build a Flutter app for Android and iOS

A sample Flutter project to demonstrate how Radiant Media Player can be used with Flutter through [webview_flutter](https://pub.dev/packages/webview_flutter) plugin.

If a are new to using WebView with Flutter, a good starting point is the [Adding WebView to your Flutter app](https://codelabs.developers.google.com/codelabs/flutter-webview#0) codelabs. This [guide](https://docs.flutter.dev/get-started/install) and this [YouTube video](https://www.youtube.com/watch?v=8sAyPDLorek) can help if you are new to Flutter.

We support using Radiant Media Player 9.15.6+ with Flutter 3.22+ to build Android 5+ and iOS 12+ apps.

This app demonstrates how to use Radiant Media Player with Flutter with our cloud player through an externally hosted Web App (https://www.radiantmediaplayer.com/flutter/hls.html) and Radiant Media Player self-hosted version through a locally hosted Web App.

## How to

- Start a new Flutter app for Android and iOS. For example from the command line:
  - `flutter create --platforms=android,ios rmp_flutter_webview`
- Navigate to the newly created rmp_flutter_webview folder: 
  - `cd rmp_flutter_webview`
- Add webview_flutter plugin when you are in rmp_flutter_webview folder:
  - `flutter pub add webview_flutter`
- Take the content from the lib/ and assets/ folders of this GitHub repository and add it to your Flutter app
- Review the pubspec.yaml file from this repository. Add the `flutter > assets > assets/www/` line to your pubspec.yaml file. This is needed for a locally hosted Web App with Flutter.
- Start the app on your Android or iOS device/simulator - see Radiant Media Player at work in a Flutter app :)

## Support notes

- We support streaming to Flutter apps in MPEG-DASH, HLS (CMAF or MPEG-TS) or MP4/WebM progressive download
- We support video advertisement with our rmp-vast open-source VAST manager (Google IMA is NOT supported)
- We support Widevine DRM for Android apps and FairPlay DRM for iOS apps
- You can also create apps for iPadOS with Flutter but you will need to adapt your design to scale to iPad sizes

## Issues

Issues for this demo app should be submitted in this GitHub page. We will do our best to review them. If you are a Radiant Media Player customer and need support with our player please [open a ticket here](https://www.radiantmediaplayer.com/technical-support.html).

## License for rmp_flutter_webview

rmp_flutter_webview is released under MIT.

## License for Radiant Media Player

Radiant Media Player is a commercial HTML5 media player, not covered by the above MIT license.

Radiant Media Player license can be found here: [https://www.radiantmediaplayer.com/terms-of-service.html](https://www.radiantmediaplayer.com/terms-of-service.html).

You may request a free trial for Radiant Media Player at: [https://www.radiantmediaplayer.com/free-trial.html](https://www.radiantmediaplayer.com/free-trial.html).
