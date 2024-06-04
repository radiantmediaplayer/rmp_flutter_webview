import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

enum _MenuOptions {
  navigationDelegate,
  loadFlutterAsset,
}

class Menu extends StatelessWidget {
  const Menu({required this.controller, super.key});

  final WebViewController controller;

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<_MenuOptions>(
      onSelected: (value) async {
        switch (value) {
          case _MenuOptions.navigationDelegate:
            await controller.loadRequest(Uri.parse('https://www.radiantmediaplayer.com/flutter/hls.html'));
          case _MenuOptions.loadFlutterAsset: // Add from here
            if (!context.mounted) return;
            await _onLoadFlutterAssetExample(controller, context);
        }
      },
      itemBuilder: (context) => [
        const PopupMenuItem<_MenuOptions>(
          value: _MenuOptions.navigationDelegate,
          child: Text('Load Remote Assets'),
        ),
        const PopupMenuItem<_MenuOptions>(
          // Add from here
          value: _MenuOptions.loadFlutterAsset,
          child: Text('Load Local Assets'),
        ),
      ],
    );
  }
}

Future<void> _onLoadFlutterAssetExample(
    WebViewController controller, BuildContext context) async {
  await controller.loadFlutterAsset('assets/www/index.html');
}
