
/**
 * The class to instantiate Radiant Media Player
 * @export
 * @class RadiantMP
*/
declare class RadiantMP {
    /**
     * @constructor
     * @param {string}  id - the id for the player container. This is a required parameter.
     */
    constructor(id: string);
    rmpUtils: Utils;
    rmpReadyManagement: ReadyManagement;
    rmpSizeManagement: SizeManagement;
    dom: {};
    id: string;
    rmpEventsManagement: EventsManagement;
    rmpDomManagement: DomManagement;
    rmpPlaybackManagement: PlaybackManagement;
    rmpInitManagement: InitManagement;
    rmpUIManagement: UIManagement;
    rmpModuleManagement: ModuleManagement;
    rmpLogsManagement: LogsManagement;
    rmpAccessible: Accessible;
    rmpColorsManagement: ColorsManagement;
    rmpLicense: License;
    rmpVolumeManagement: VolumeManagement;
    rmpFullscreenManagement: FullscreenManagement;
    rmpSeekManagement: SeekManagement;
    rmpPosterManagement: PosterManagement;
    isMobile: boolean;
    dispatch(eventName: string, data: object): void;
    /**
     * @private
     */
    private _on;
    on(eventName: string, callback: Function): void;
    _one(eventName: any, callback: any): void;
    one(eventName: string, callback: Function): void;
    /**
     * @private
     */
    private _off;
    off(eventName: string, callback: Function): void;
    /**
     * @private
     */
    private _analyticsPlay;
    /**
     * @private
     */
    private _prepOkStreamingForAppleDevices;
    okHlsJS: boolean;
    okShaka: boolean;
    usingNativeHlsOnAppleDevices: boolean;
    /**
     * @private
     */
    private _windowOnline;
    /**
     * @private
     */
    private _windowOffline;
    /**
     * @typedef {object} FlipVideo
     * @property {number} [x]
     * @property {number} [y]
     * @property {number} [z]
     * @typedef {object} CustomTrackNames
     * @property {string} [captions]
     * @property {string} [quality]
     * @property {string} [audio]
     * @typedef {object} CustomModule
     * @property {string} [hint]
     * @property {string} [svg]
     * @property {string} [svgHover]
     * @property {function} [callback]
     * @typedef {object} AdSchedule
     * @property {string} [preroll]
     * @property {string[][]} [midroll]
     * @property {string} [postroll]
     * @typedef {object} CuePoint
     * @property {number} [time]
     * @property {string} [text]
     * @typedef {object} AdsLabels
     * @property {string} [controlBarCustomMessage]
     * @property {string} [skipMessage]
     * @property {string} [textForClickUIOnMobile]
     * @typedef {object} ErrorLabels
     * @property {string} [customErrorMessage]
     * @property {string} [noSupportMessage]
     * @property {string} [noSupportInstallChrome]
     * @typedef {object} FccCaptionsLabels
     * @property {string} [fontColor]
     * @property {string} [fontOpacity]
     * @property {string} [fontSize]
     * @property {string} [fontFamily]
     * @property {string} [fontEdge]
     * @property {string} [backgroundColor]
     * @property {string} [backgroundOpacity]
     * @property {string} [windowColor]
     * @property {string} [windowOpacity]
     * @typedef {object} HintLabels
     * @property {string} [play]
     * @property {string} [pause]
     * @property {string} [seek]
     * @property {string} [enterFullscreen]
     * @property {string} [exitFullscreen]
     * @property {string} [quickRewind]
     * @property {string} [quickForward]
     * @property {string} [sharing]
     * @property {string} [sharingLink]
     * @property {string} [sharingEmbedCode]
     * @property {string} [quality]
     * @property {string} [volume]
     * @property {string} [mute]
     * @property {string} [unmute]
     * @property {string} [minus]
     * @property {string} [plus]
     * @property {string} [speed]
     * @property {string} [captions]
     * @property {string} [track]
     * @property {string} [transcript]
     * @property {string} [audio]
     * @property {string} [chapters]
     * @property {string} [live]
     * @property {string} [pip]
     * @property {string} [close]
     * @property {string} [settings]
     * @property {string} [back]
     * @property {string} [cast]
     * @property {string} [airplay]
     * @property {string} [playlist]
     * @property {string} [next]
     * @property {string} [previous]
     * @property {string} [related]
     * @property {string} [upNext]
     * @property {string} [up]
     * @property {string} [down]
     * @property {string} [left]
     * @property {string} [right]
     * @property {string} [default]
     * @property {string} [off]
     * @property {string} [loop]
     * @property {string} [info]
     * @typedef {object} BitratesLabels
     * @property {string} [auto]
     * @property {string[][]} [renditions]
     * @typedef {object} Labels
     * @property {BitratesLabels} [bitrates]
     * @property {HintLabels} [hint]
     * @property {FccCaptionsLabels} [fccCaptions]
     * @property {ErrorLabels} [error]
     * @property {AdsLabels} [ads]
     * @typedef {object} Src
     * @property {string} [hls]
     * @property {string} [dash]
     * @property {string[]} [mp4]
     * @property {string[]} [webm]
     * @property {string} [fps]
     * @property {string} [m4a]
     * @property {string} [mp3]
     * @property {string} [ogg]
     * @typedef {object} FpsDrm
     * @property {string} certificatePath
     * @property {string} processSpcPath
     * @property {string} [licenseResponseType]
     * @property {object[]} [licenseRequestHeaders]
     * @property {object[]} [certificateRequestHeaders]
     * @property {function} [extractContentId]
     * @property {function} [licenseRequestMessage]
     * @property {function} [licenseRequestLoaded]
     * @property {string} [keySystem]
     * @typedef {object} ShakaDrm
     * @property {object} servers
     * @property {object} [clearKeys]
     * @property {object} [advanced]
     * @typedef {object} ShakaRestrictions
     * @property {number} [minWidth]
     * @property {number} [maxWidth]
     * @property {number} [minHeight]
     * @property {number} [maxHeight]
     * @property {number} [minPixels]
     * @property {number} [maxPixels]
     * @property {number} [minAudioBandwidth]
     * @property {number} [maxAudioBandwidth]
     * @property {number} [minVideoBandwidth]
     * @property {number} [maxVideoBandwidth]
     * @typedef {object} RetryParametersData
     * @property {number} [timeout]
     * @property {number} [maxTimeout]
     * @property {number} [maxAttempts]
     * @property {number} [delay]
     * @typedef {object} RetryParameters
     * @property {RetryParametersData} [manifest]
     * @property {RetryParametersData} [levels]
     * @property {RetryParametersData} [segment]
     * @property {RetryParametersData} [drm]
     * @typedef {object} Artwork
     * @property {string} src
     * @property {string} sizes
     * @property {string} type
     * @typedef {object} AudioPreference
     * @property {string} lang
     * @typedef {object} SubtitlePreference
     * @property {string} lang
     * @typedef {object} ContentMetadata
     * @property {string} [title]
     * @property {string} [description]
     * @property {string} [artist]
     * @property {string} [album]
     * @property {string} [id]
     * @property {string} [releaseDate]
     * @property {string} [thumbnail]
     * @property {string} [duration]
     * @property {string} [googleCastType]
     * @property {Artwork[]} [artwork]
     * @property {string[]} [poster]
     * @property {string[]} [endOfVideoPoster]
     * @property {string} [animatedPoster]
     * @typedef {object} RadiantMediaPlayerSettings
     * @property {string} licenseKey
     * @property {number} [width]
     * @property {number} [height]
     * @property {boolean} [iframeMode]
     * @property {boolean} [iframeAllowed]
     * @property {boolean} [autoHeightMode]
     * @property {number} [autoHeightModeRatio]
     * @property {string} [backgroundColor]
     * @property {string} [skin]
     * @property {string} [iconsSet]
     * @property {number} [iconsSize]
     * @property {string} [customIconsLoc]
     * @property {boolean} [fullWindowSkin]
     * @property {string} [skinBackgroundColor]
     * @property {string} [skinButtonColor]
     * @property {string} [skinAccentColor]
     * @property {boolean} [hideControls]
     * @property {boolean} [hideCentralPlayButton]
     * @property {boolean} [hideCentralBuffering]
     * @property {boolean} [hideSeekBar]
     * @property {boolean} [hideFullscreen]
     * @property {boolean} [hideVolume]
     * @property {boolean} [hideExternalPlayerLabels]
     * @property {boolean} [disableKeyboardControl]
     * @property {boolean} [longFormContent]
     * @property {boolean} [automaticFullscreenOnLandscape]
     * @property {boolean} [fullscreenFullWindowMode]
     * @property {boolean} [detectViewerLanguage]
     * @property {string} [fixedLabelsLanguage]
     * @property {boolean} [doubleClickForFullscreen]
     * @property {boolean} [pauseContentWhenViewingAreaIsClicked]
     * @property {boolean} [autoplay]
     * @property {number} [autoplayCount]
     * @property {boolean} [requestAutoplayCapabilitiesData]
     * @property {number} [detectAutoplayTimeout]
     * @property {boolean} [viewableAutoplay]
     * @property {boolean} [viewablePlayPause]
     * @property {number} [viewableThreshold]
     * @property {boolean} [srcChangeAutoplay]
     * @property {string} [posterScaleMode]
     * @property {boolean} [autoplayAnimatedPoster]
     * @property {boolean} [hideInitialBlackFrameWhenNoPoster]
     * @property {string} [scaleMode]
     * @property {boolean} [loop]
     * @property {boolean} [muted]
     * @property {boolean} [permanentMuted]
     * @property {number} [initialVolume]
     * @property {boolean} [forceInitialVolume]
     * @property {boolean} [rememberVolume]
     * @property {boolean} [rememberCurrentTime]
     * @property {boolean} [rememberQuality]
     * @property {string} [bitrateDataDisplayed]
     * @property {string} [preload]
     * @property {number} [delayToFade]
     * @property {ContentMetadata} [contentMetadata]
     * @property {string} [appName]
     * @property {string} [logo]
     * @property {string} [logoLoc]
     * @property {boolean} [logoWatermark]
     * @property {string} [logoPosition]
     * @property {string} [logoMargin]
     * @property {boolean} [pauseContentOnLogoClick]
     * @property {boolean} [sharing]
     * @property {string} [sharingUrl]
     * @property {string} [sharingCode]
     * @property {string[]} [sharingNetworks]
     * @property {number} [frameRate]
     * @property {boolean} [strictGdprCompliance]
     * @property {boolean} [displayRemainingTimeInPlaceOfDuration]
     * @property {boolean} [errorOnlyShowCustomText]
     * @property {CustomTrackNames} [customTrackNames]
     * @property {FlipVideo} [flipVideo]
     * @property {boolean} [audioOnly]
     * @property {boolean} [audioOnlyUseVideoLayout]
     * @property {boolean} [audioOnlyIcecast]
     * @property {boolean} [audioOnlyID3UI]
     * @property {number} [debugLevel]
     * @property {number} [debugForceRawConsoleLogs]
     * @property {string} [pathToRmpFiles]
     * @property {number} [offsetStartPosition]
     * @property {number} [quickRewind]
     * @property {number} [quickForward]
     * @property {boolean} [ajaxWithCredentials]
     * @property {number} [ajaxTimeout]
     * @property {boolean} [allowLocalStorage]
     * @property {boolean} [pip]
     * @property {boolean} [floating]
     * @property {number} [floatingThreshold]
     * @property {RetryParameters} [retryParameters]
     * @property {boolean} [dashFirst]
     * @property {boolean} [shakaStartAtSegmentBoundary]
     * @property {number} [shakaInaccurateManifestTolerance]
     * @property {boolean} [shakaIgnoreMinBufferTime]
     * @property {ShakaRestrictions} [shakaRestrictions]
     * @property {ShakaDrm} [shakaDrm]
     * @property {object} [shakaRequestConfiguration]
     * @property {object} [shakaCustomConfig]
     * @property {object} [shakaFullCustomConfig]
     * @property {function|null} [shakaCustomRequestFilter]
     * @property {function|null} [shakaCustomResponseFilter]
     * @property {object} [shakaKeySystemsByURI]
     * @property {boolean} [shakaOffline]
     * @property {number} [shakaOfflinePreferredTrackQuality]
     * @property {number} [shakaMaxBufferAhead]
     * @property {number} [shakaMaxBufferBehind]
     * @property {boolean} [shakaClearBufferSwitch]
     * @property {boolean} [shakaLiveSync]
     * @property {boolean} [shakaAWSMediaTailor]
     * @property {object} [shakaAWSMediaTailorAdsParam]
     * @property {boolean} [disableVideo]
     * @property {boolean} [disableAudio]
     * @property {boolean} [disableText]
     * @property {boolean} [preferSpatialAudio]
     * @property {number} [hlsJSStartLevel]
     * @property {boolean} [hlsJSFetchXhrWithCredentials]
     * @property {string} [hlsJSCaptionsTextTrack1Label]
     * @property {string} [hlsJSCaptionsTextTrack2Label]
     * @property {string} [hlsJSCaptionsTextTrack3Label]
     * @property {string} [hlsJSCaptionsTextTrack4Label]
     * @property {string} [hlsJSDefaultAudioCodec]
     * @property {number} [hlsJSMinAutoBitrate]
     * @property {boolean} [hlsJSAppleAppStoreCompliance]
     * @property {boolean} [hlsJSStopDownloadWhilePaused]
     * @property {object} [hlsJSCustomConfig]
     * @property {object} [hlsJSFullCustomConfig]
     * @property {boolean} [forceNativeHlsOverHlsJS]
     * @property {boolean} [forceHlsJSOnAppleDevices]
     * @property {boolean} [hlsJSProgressive]
     * @property {number} [hlsJSMaxBufferAhead]
     * @property {number} [hlsJSMaxBufferBehind]
     * @property {string} [manualSwitchingMode]
     * @property {string[]} [preferredVideoCodecs]
     * @property {string[]} [preferredAudioCodecs]
     * @property {boolean} [consumeLessEnergy]
     * @property {string} [hlsEngine]
     * @property {boolean} [capLevelToPlayerSize]
     * @property {boolean} [ignoreDevicePixelRatio]
     * @property {boolean} [autoLowLatencyMode]
     * @property {string[]} [preferredKeySystems]
     * @property {boolean} [forceLegacyDependencies]
     * @property {AudioPreference} [audioPreference]
     * @property {SubtitlePreference} [subtitlePreference]
     * @property {string} [preferredVideoHdr]
     * @property {boolean} [enableCMCD]
     * @property {boolean} [useHeadersForCMCD]
     * @property {string} [cmcdSessionId]
     * @property {string} [cmcdContentId]
     * @property {string[]} [cmcdIncludeKeys]
     * @property {boolean} [enableCMSD]
     * @property {FpsDrm} [fpsDrm]
     * @property {Src} src
     * @property {Src} [backupSrc]
     * @property {number} [initialBitrate]
     * @property {boolean} [pdCheckCodecsDone]
     * @property {Labels} [labels]
     * @property {number} [dvrUIThreshold]
     * @property {boolean} [liveOnResumeKeepSyncWithEdge]
     * @property {string[][]} [ccFiles]
     * @property {string} [crossorigin]
     * @property {string} [ccFontColor]
     * @property {number} [ccFontOpacity]
     * @property {number} [ccFontSize]
     * @property {string} [ccFontFamily]
     * @property {string} [ccFontEdge]
     * @property {string} [ccBackgroundColor]
     * @property {number} [ccBackgroundOpacity]
     * @property {string} [ccWindowColor]
     * @property {number} [ccWindowOpacity]
     * @property {string[][]} [transcripts]
     * @property {boolean} [enableGAVideoTracking]
     * @property {object} [gaEventParameters]
     * @property {string[]} [gaEvents]
     * @property {boolean} [enableMatomoTracking]
     * @property {string} [dataMatomoTitle]
     * @property {string} [seekBarThumbnailsLoc]
     * @property {string} [chaptersLoc]
     * @property {CuePoint[]} [cuePoints]
     * @property {boolean} [cuePointsVisibleOnTimeline]
     * @property {function|null} [cuePointsCallback]
     * @property {boolean} [speed]
     * @property {number[]} [speedRates]
     * @property {boolean} [googleCast]
     * @property {boolean} [googleCastCordova]
     * @property {boolean} [googleCastCordovaDebug]
     * @property {string} [googleCastReceiverAppId]
     * @property {boolean} [googleCastAndroidReceiverCompatible]
     * @property {string} [googleCastVmapAdsRequest]
     * @property {string} [googleCastAdTagUrl]
     * @property {object} [googleCastHeaders]
     * @property {boolean} [googleCastDrmToday]
     * @property {boolean} [googleCastEnableUITextDisplayer]
     * @property {object} [googleCastData]
     * @property {boolean} [googleCastDisableAds]
     * @property {boolean} [airplay]
     * @property {boolean} [airplayWithMms]
     * @property {boolean} [ads]
     * @property {string} [adTagUrl]
     * @property {boolean} [adShowMarkers]
     * @property {boolean} [adOnAdBlockPreventPlayback]
     * @property {string} [adsResponse]
     * @property {boolean} [adImaTest]
     * @property {string[]} [adTagWaterfall]
     * @property {string} [adLocale]
     * @property {boolean} [adUseStyledNonLinearAds]
     * @property {AdSchedule} [adSchedule]
     * @property {string[]} [adScheduleWaterfall]
     * @property {function|null} [adScheduleCallback]
     * @property {string} [adVpaidMode]
     * @property {boolean} [adVpaidControls]
     * @property {number} [adContentDuration]
     * @property {string} [adContentKeywords]
     * @property {string} [adContentTitle]
     * @property {boolean} [adForceNonLinearFullSlot]
     * @property {boolean} [adTagReloadOnEnded]
     * @property {boolean} [adShowRemainingTime]
     * @property {boolean} [adAutoAlign]
     * @property {boolean} [adEnablePreloading]
     * @property {boolean} [adCookiesEnabled]
     * @property {number} [adLiveStreamPrefetchSeconds]
     * @property {string} [adContinuousPlayback]
     * @property {boolean} [adForceNativeFullscreenOnIosForAds]
     * @property {number} [adNonLinearAdSlotWidth]
     * @property {number} [adNonLinearAdSlotHeight]
     * @property {string} [adCompanionBackfillMode]
     * @property {string} [adPpid]
     * @property {string} [adSessionId]
     * @property {object} [omidAccessModeRules]
     * @property {boolean} [adImaDai]
     * @property {string} [adImaDaiVodContentSourceId]
     * @property {string} [adImaDaiVodVideoId]
     * @property {boolean} [adImaDaiVodPod]
     * @property {function|null} [adImaDaiVodPodRequestStreamURLCallback]
     * @property {string} [adImaDaiLiveAssetKey]
     * @property {string} [adImaDaiPodNetworkCode]
     * @property {string} [adImaDaiCustomAssetKey]
     * @property {string} [adImaDaiApiKey]
     * @property {string} [adImaDaiBackupStream]
     * @property {object} [adImaDaiAdTagParameters]
     * @property {string} [adImaDaiStreamActivityMonitorId]
     * @property {string} [adImaDaiAuthToken]
     * @property {boolean} [adOutStream]
     * @property {boolean} [adOutStreamMutedAutoplay]
     * @property {string[]} [omidAllowedVendors]
     * @property {boolean} [adOmidSupport]
     * @property {boolean} [adAjaxWithCredentials]
     * @property {boolean} [adRmpVastEnableVpaid]
     * @property {boolean} [adSupportHlsCreatives]
     * @property {boolean} [adRmpVastEnableSimid]
     * @property {number} [adLoadMediaTimeout]
     * @property {number} [adLoadVastTimeout]
     * @property {number} [adMaxNumRedirects]
     * @property {boolean} [adCountDown]
     * @property {string} [adParser]
     * @property {string} [adPageUrl]
     * @property {string} [relatedLoc]
     * @property {object[]} [relatedData]
     * @property {number} [relatedUpNextOffset]
     * @property {boolean} [relatedUpNextAutoplay]
     * @property {boolean} [relatedEndedLoop]
     * @property {boolean} [relatedAudioOnly]
     * @property {function|null} [relatedCallback]
     * @property {string} [playlistLoc]
     * @property {object[]} [playlistData]
     * @property {boolean} [playlistUpNextAutoplay]
     * @property {boolean} [playlistEndedLoop]
     * @property {boolean} [playlistAudioOnly]
     * @property {function|null} [playlistCallback]
     * @property {boolean} [video360]
     * @property {number} [video360FocalLength]
     * @property {number} [video360MaxFocalLength]
     * @property {number} [video360MinFocalLength]
     * @property {number} [video360InitialLat]
     * @property {number} [video360InitialLon]
     * @property {Src} [video360FallbackSrc]
     * @property {boolean} [loopModule]
     * @property {string} [infoModule]
     * @property {boolean} [theaterModeModule]
     * @property {CustomModule} [customModule]
     * @property {object} [streamrootConfig]
     * @property {object} [muxDataSettings]
     * @property {boolean} [muxDataUseListData]
     * @property {object} [bitmovinAnalyticsConfig]
     * @property {string} [customAllowDenyListUrl]
     * @param {RadiantMediaPlayerSettings} settings
     * @return {void}
     */
    init(settings: {
        licenseKey: string;
        width?: number;
        height?: number;
        iframeMode?: boolean;
        iframeAllowed?: boolean;
        autoHeightMode?: boolean;
        autoHeightModeRatio?: number;
        backgroundColor?: string;
        skin?: string;
        iconsSet?: string;
        iconsSize?: number;
        customIconsLoc?: string;
        fullWindowSkin?: boolean;
        skinBackgroundColor?: string;
        skinButtonColor?: string;
        skinAccentColor?: string;
        hideControls?: boolean;
        hideCentralPlayButton?: boolean;
        hideCentralBuffering?: boolean;
        hideSeekBar?: boolean;
        hideFullscreen?: boolean;
        hideVolume?: boolean;
        hideExternalPlayerLabels?: boolean;
        disableKeyboardControl?: boolean;
        longFormContent?: boolean;
        automaticFullscreenOnLandscape?: boolean;
        fullscreenFullWindowMode?: boolean;
        detectViewerLanguage?: boolean;
        fixedLabelsLanguage?: string;
        doubleClickForFullscreen?: boolean;
        pauseContentWhenViewingAreaIsClicked?: boolean;
        autoplay?: boolean;
        autoplayCount?: number;
        requestAutoplayCapabilitiesData?: boolean;
        detectAutoplayTimeout?: number;
        viewableAutoplay?: boolean;
        viewablePlayPause?: boolean;
        viewableThreshold?: number;
        srcChangeAutoplay?: boolean;
        posterScaleMode?: string;
        autoplayAnimatedPoster?: boolean;
        hideInitialBlackFrameWhenNoPoster?: boolean;
        scaleMode?: string;
        loop?: boolean;
        muted?: boolean;
        permanentMuted?: boolean;
        initialVolume?: number;
        forceInitialVolume?: boolean;
        rememberVolume?: boolean;
        rememberCurrentTime?: boolean;
        rememberQuality?: boolean;
        bitrateDataDisplayed?: string;
        preload?: string;
        delayToFade?: number;
        contentMetadata?: {
            title?: string;
            description?: string;
            artist?: string;
            album?: string;
            id?: string;
            releaseDate?: string;
            thumbnail?: string;
            duration?: string;
            googleCastType?: string;
            artwork?: {
                src: string;
                sizes: string;
                type: string;
            }[];
            poster?: string[];
            endOfVideoPoster?: string[];
            animatedPoster?: string;
        };
        appName?: string;
        logo?: string;
        logoLoc?: string;
        logoWatermark?: boolean;
        logoPosition?: string;
        logoMargin?: string;
        pauseContentOnLogoClick?: boolean;
        sharing?: boolean;
        sharingUrl?: string;
        sharingCode?: string;
        sharingNetworks?: string[];
        frameRate?: number;
        strictGdprCompliance?: boolean;
        displayRemainingTimeInPlaceOfDuration?: boolean;
        errorOnlyShowCustomText?: boolean;
        customTrackNames?: {
            captions?: string;
            quality?: string;
            audio?: string;
        };
        flipVideo?: {
            x?: number;
            y?: number;
            z?: number;
        };
        audioOnly?: boolean;
        audioOnlyUseVideoLayout?: boolean;
        audioOnlyIcecast?: boolean;
        audioOnlyID3UI?: boolean;
        debugLevel?: number;
        debugForceRawConsoleLogs?: number;
        pathToRmpFiles?: string;
        offsetStartPosition?: number;
        quickRewind?: number;
        quickForward?: number;
        ajaxWithCredentials?: boolean;
        ajaxTimeout?: number;
        allowLocalStorage?: boolean;
        pip?: boolean;
        floating?: boolean;
        floatingThreshold?: number;
        retryParameters?: {
            manifest?: {
                timeout?: number;
                maxTimeout?: number;
                maxAttempts?: number;
                delay?: number;
            };
            levels?: {
                timeout?: number;
                maxTimeout?: number;
                maxAttempts?: number;
                delay?: number;
            };
            segment?: {
                timeout?: number;
                maxTimeout?: number;
                maxAttempts?: number;
                delay?: number;
            };
            drm?: {
                timeout?: number;
                maxTimeout?: number;
                maxAttempts?: number;
                delay?: number;
            };
        };
        dashFirst?: boolean;
        shakaStartAtSegmentBoundary?: boolean;
        shakaInaccurateManifestTolerance?: number;
        shakaIgnoreMinBufferTime?: boolean;
        shakaRestrictions?: {
            minWidth?: number;
            maxWidth?: number;
            minHeight?: number;
            maxHeight?: number;
            minPixels?: number;
            maxPixels?: number;
            minAudioBandwidth?: number;
            maxAudioBandwidth?: number;
            minVideoBandwidth?: number;
            maxVideoBandwidth?: number;
        };
        shakaDrm?: {
            servers: object;
            clearKeys?: object;
            advanced?: object;
        };
        shakaRequestConfiguration?: object;
        shakaCustomConfig?: object;
        shakaFullCustomConfig?: object;
        shakaCustomRequestFilter?: Function | null;
        shakaCustomResponseFilter?: Function | null;
        shakaKeySystemsByURI?: object;
        shakaOffline?: boolean;
        shakaOfflinePreferredTrackQuality?: number;
        shakaMaxBufferAhead?: number;
        shakaMaxBufferBehind?: number;
        shakaClearBufferSwitch?: boolean;
        shakaLiveSync?: boolean;
        shakaAWSMediaTailor?: boolean;
        shakaAWSMediaTailorAdsParam?: object;
        disableVideo?: boolean;
        disableAudio?: boolean;
        disableText?: boolean;
        preferSpatialAudio?: boolean;
        hlsJSStartLevel?: number;
        hlsJSFetchXhrWithCredentials?: boolean;
        hlsJSCaptionsTextTrack1Label?: string;
        hlsJSCaptionsTextTrack2Label?: string;
        hlsJSCaptionsTextTrack3Label?: string;
        hlsJSCaptionsTextTrack4Label?: string;
        hlsJSDefaultAudioCodec?: string;
        hlsJSMinAutoBitrate?: number;
        hlsJSAppleAppStoreCompliance?: boolean;
        hlsJSStopDownloadWhilePaused?: boolean;
        hlsJSCustomConfig?: object;
        hlsJSFullCustomConfig?: object;
        forceNativeHlsOverHlsJS?: boolean;
        forceHlsJSOnAppleDevices?: boolean;
        hlsJSProgressive?: boolean;
        hlsJSMaxBufferAhead?: number;
        hlsJSMaxBufferBehind?: number;
        manualSwitchingMode?: string;
        preferredVideoCodecs?: string[];
        preferredAudioCodecs?: string[];
        consumeLessEnergy?: boolean;
        hlsEngine?: string;
        capLevelToPlayerSize?: boolean;
        ignoreDevicePixelRatio?: boolean;
        autoLowLatencyMode?: boolean;
        preferredKeySystems?: string[];
        forceLegacyDependencies?: boolean;
        audioPreference?: {
            lang: string;
        };
        subtitlePreference?: {
            lang: string;
        };
        preferredVideoHdr?: string;
        enableCMCD?: boolean;
        useHeadersForCMCD?: boolean;
        cmcdSessionId?: string;
        cmcdContentId?: string;
        cmcdIncludeKeys?: string[];
        enableCMSD?: boolean;
        fpsDrm?: {
            certificatePath: string;
            processSpcPath: string;
            licenseResponseType?: string;
            licenseRequestHeaders?: object[];
            certificateRequestHeaders?: object[];
            extractContentId?: Function;
            licenseRequestMessage?: Function;
            licenseRequestLoaded?: Function;
            keySystem?: string;
        };
        src: {
            hls?: string;
            dash?: string;
            mp4?: string[];
            webm?: string[];
            fps?: string;
            m4a?: string;
            mp3?: string;
            ogg?: string;
        };
        backupSrc?: {
            hls?: string;
            dash?: string;
            mp4?: string[];
            webm?: string[];
            fps?: string;
            m4a?: string;
            mp3?: string;
            ogg?: string;
        };
        initialBitrate?: number;
        pdCheckCodecsDone?: boolean;
        labels?: {
            bitrates?: {
                auto?: string;
                renditions?: string[][];
            };
            hint?: {
                play?: string;
                pause?: string;
                seek?: string;
                enterFullscreen?: string;
                exitFullscreen?: string;
                quickRewind?: string;
                quickForward?: string;
                sharing?: string;
                sharingLink?: string;
                sharingEmbedCode?: string;
                quality?: string;
                volume?: string;
                mute?: string;
                unmute?: string;
                minus?: string;
                plus?: string;
                speed?: string;
                captions?: string;
                track?: string;
                transcript?: string;
                audio?: string;
                chapters?: string;
                live?: string;
                pip?: string;
                close?: string;
                settings?: string;
                back?: string;
                cast?: string;
                airplay?: string;
                playlist?: string;
                next?: string;
                previous?: string;
                related?: string;
                upNext?: string;
                up?: string;
                down?: string;
                left?: string;
                right?: string;
                default?: string;
                off?: string;
                loop?: string;
                info?: string;
            };
            fccCaptions?: {
                fontColor?: string;
                fontOpacity?: string;
                fontSize?: string;
                fontFamily?: string;
                fontEdge?: string;
                backgroundColor?: string;
                backgroundOpacity?: string;
                windowColor?: string;
                windowOpacity?: string;
            };
            error?: {
                customErrorMessage?: string;
                noSupportMessage?: string;
                noSupportInstallChrome?: string;
            };
            ads?: {
                controlBarCustomMessage?: string;
                skipMessage?: string;
                textForClickUIOnMobile?: string;
            };
        };
        dvrUIThreshold?: number;
        liveOnResumeKeepSyncWithEdge?: boolean;
        ccFiles?: string[][];
        crossorigin?: string;
        ccFontColor?: string;
        ccFontOpacity?: number;
        ccFontSize?: number;
        ccFontFamily?: string;
        ccFontEdge?: string;
        ccBackgroundColor?: string;
        ccBackgroundOpacity?: number;
        ccWindowColor?: string;
        ccWindowOpacity?: number;
        transcripts?: string[][];
        enableGAVideoTracking?: boolean;
        gaEventParameters?: object;
        gaEvents?: string[];
        enableMatomoTracking?: boolean;
        dataMatomoTitle?: string;
        seekBarThumbnailsLoc?: string;
        chaptersLoc?: string;
        cuePoints?: {
            time?: number;
            text?: string;
        }[];
        cuePointsVisibleOnTimeline?: boolean;
        cuePointsCallback?: Function | null;
        speed?: boolean;
        speedRates?: number[];
        googleCast?: boolean;
        googleCastCordova?: boolean;
        googleCastCordovaDebug?: boolean;
        googleCastReceiverAppId?: string;
        googleCastAndroidReceiverCompatible?: boolean;
        googleCastVmapAdsRequest?: string;
        googleCastAdTagUrl?: string;
        googleCastHeaders?: object;
        googleCastDrmToday?: boolean;
        googleCastEnableUITextDisplayer?: boolean;
        googleCastData?: object;
        googleCastDisableAds?: boolean;
        airplay?: boolean;
        airplayWithMms?: boolean;
        ads?: boolean;
        adTagUrl?: string;
        adShowMarkers?: boolean;
        adOnAdBlockPreventPlayback?: boolean;
        adsResponse?: string;
        adImaTest?: boolean;
        adTagWaterfall?: string[];
        adLocale?: string;
        adUseStyledNonLinearAds?: boolean;
        adSchedule?: {
            preroll?: string;
            midroll?: string[][];
            postroll?: string;
        };
        adScheduleWaterfall?: string[];
        adScheduleCallback?: Function | null;
        adVpaidMode?: string;
        adVpaidControls?: boolean;
        adContentDuration?: number;
        adContentKeywords?: string;
        adContentTitle?: string;
        adForceNonLinearFullSlot?: boolean;
        adTagReloadOnEnded?: boolean;
        adShowRemainingTime?: boolean;
        adAutoAlign?: boolean;
        adEnablePreloading?: boolean;
        adCookiesEnabled?: boolean;
        adLiveStreamPrefetchSeconds?: number;
        adContinuousPlayback?: string;
        adForceNativeFullscreenOnIosForAds?: boolean;
        adNonLinearAdSlotWidth?: number;
        adNonLinearAdSlotHeight?: number;
        adCompanionBackfillMode?: string;
        adPpid?: string;
        adSessionId?: string;
        omidAccessModeRules?: object;
        adImaDai?: boolean;
        adImaDaiVodContentSourceId?: string;
        adImaDaiVodVideoId?: string;
        adImaDaiVodPod?: boolean;
        adImaDaiVodPodRequestStreamURLCallback?: Function | null;
        adImaDaiLiveAssetKey?: string;
        adImaDaiPodNetworkCode?: string;
        adImaDaiCustomAssetKey?: string;
        adImaDaiApiKey?: string;
        adImaDaiBackupStream?: string;
        adImaDaiAdTagParameters?: object;
        adImaDaiStreamActivityMonitorId?: string;
        adImaDaiAuthToken?: string;
        adOutStream?: boolean;
        adOutStreamMutedAutoplay?: boolean;
        omidAllowedVendors?: string[];
        adOmidSupport?: boolean;
        adAjaxWithCredentials?: boolean;
        adRmpVastEnableVpaid?: boolean;
        adSupportHlsCreatives?: boolean;
        adRmpVastEnableSimid?: boolean;
        adLoadMediaTimeout?: number;
        adLoadVastTimeout?: number;
        adMaxNumRedirects?: number;
        adCountDown?: boolean;
        adParser?: string;
        adPageUrl?: string;
        relatedLoc?: string;
        relatedData?: object[];
        relatedUpNextOffset?: number;
        relatedUpNextAutoplay?: boolean;
        relatedEndedLoop?: boolean;
        relatedAudioOnly?: boolean;
        relatedCallback?: Function | null;
        playlistLoc?: string;
        playlistData?: object[];
        playlistUpNextAutoplay?: boolean;
        playlistEndedLoop?: boolean;
        playlistAudioOnly?: boolean;
        playlistCallback?: Function | null;
        video360?: boolean;
        video360FocalLength?: number;
        video360MaxFocalLength?: number;
        video360MinFocalLength?: number;
        video360InitialLat?: number;
        video360InitialLon?: number;
        video360FallbackSrc?: {
            hls?: string;
            dash?: string;
            mp4?: string[];
            webm?: string[];
            fps?: string;
            m4a?: string;
            mp3?: string;
            ogg?: string;
        };
        loopModule?: boolean;
        infoModule?: string;
        theaterModeModule?: boolean;
        customModule?: {
            hint?: string;
            svg?: string;
            svgHover?: string;
            callback?: Function;
        };
        streamrootConfig?: object;
        muxDataSettings?: object;
        muxDataUseListData?: boolean;
        bitmovinAnalyticsConfig?: object;
        customAllowDenyListUrl?: string;
    }): void;
    refTime: number;
    preload: string;
    analyticsInterval: number;
    rmpGoogleAnalytics: GoogleAnalytics;
    pathToRmpFiles: any;
    windowOnlineFn: any;
    windowOfflineFn: any;
    okHls: boolean;
    forceHlsJSOnIos: boolean;
    forceHlsJSOnIpadOS: boolean;
    forceHlsJSOnMacOSSafari: boolean;
    adForceNativeFullscreenOnIosForAds: boolean;
    dashFirst: boolean;
    okFps: boolean;
    okWebM: boolean;
    okMp4: boolean;
    okM4a: boolean;
    okMp3: boolean;
    okOgg: boolean;
    skin: string;
    ads: boolean;
    rememberVolume: boolean;
    pip: boolean;
    googleCast: boolean;
    airplay: boolean;
    muted: boolean;
    capLevelToPlayerSize: boolean;
    ignoreDevicePixelRatio: boolean;
    crossorigin: string;
    rmpGoogleCast: GoogleCast | GoogleCastCordova;
    rmpMux: Mux;
    audioOnly: boolean;
    shakaMaxBufferAhead: number;
    hlsJSMaxBufferAhead: number;
    viewableAutoplay: boolean;
    autoplay: boolean;
    rmpAutoplay: Autoplay;
    autoplayMode: any;
    getReady(): boolean;
    getPlayerInitialized(): boolean;
    /**
     * @typedef {object} ScreenDimension
     * @property {number} width
     * @property {number} height
     * @typedef {object} ViewportSize
     * @property {number} width
     * @property {number} height
     * @typedef {object} SmartTVData
     * @property {boolean} tv
     * @property {boolean} webos
     * @property {boolean} tizen
     * @typedef {object} RadiantMediaPlayerEnvironment
     * @property {string} userAgent
     * @property {string} platform
     * @property {string} protocol
     * @property {boolean} primaryPointerIsTouchScreen
     * @property {[boolean, number]} isIos
     * @property {boolean} isIpadOS
     * @property {boolean} isMacOS
     * @property {[boolean, number]} isSafari
     * @property {[boolean, number]} isMacosSafari
     * @property {boolean} isApple
     * @property {[boolean, number]} isAndroid
     * @property {SmartTVData} smartTVData
     * @property {number} devicePixelRatio
     * @property {boolean} isStandalone
     * @property {boolean} isAndroidMobileOrTabletWebView
     * @property {boolean} okMp4
     * @property {boolean} okWebM
     * @property {boolean} okM4a
     * @property {boolean} okMp3
     * @property {boolean} okMse
     * @property {boolean} okMms
     * @property {boolean} okShaka
     * @property {boolean} okHlsJS
     * @property {boolean} okHls
     * @property {boolean} okEme
     * @property {boolean} okFps
     * @property {boolean} ok360
     * @property {boolean} isInIframe
     * @property {boolean} hasIntersectionObserver
     * @property {ViewportSize} viewportSize
     * @property {boolean} hasPassiveEventListeners
     * @property {boolean} hasScreenOrientationAPI
     * @property {boolean} hasOlderScreenOrientationAPI
     * @property {ScreenDimension} screenDimension
     * @property {boolean} isOnline
     * @property {boolean} hasNativeFullscreenSupport
     * @property {number} bwEstimate
     * @return {RadiantMediaPlayerEnvironment}
     */
    getEnvironment(): {
        userAgent: string;
        platform: string;
        protocol: string;
        primaryPointerIsTouchScreen: boolean;
        isIos: [boolean, number];
        isIpadOS: boolean;
        isMacOS: boolean;
        isSafari: [boolean, number];
        isMacosSafari: [boolean, number];
        isApple: boolean;
        isAndroid: [boolean, number];
        smartTVData: {
            tv: boolean;
            webos: boolean;
            tizen: boolean;
        };
        devicePixelRatio: number;
        isStandalone: boolean;
        isAndroidMobileOrTabletWebView: boolean;
        okMp4: boolean;
        okWebM: boolean;
        okM4a: boolean;
        okMp3: boolean;
        okMse: boolean;
        okMms: boolean;
        okShaka: boolean;
        okHlsJS: boolean;
        okHls: boolean;
        okEme: boolean;
        okFps: boolean;
        ok360: boolean;
        isInIframe: boolean;
        hasIntersectionObserver: boolean;
        viewportSize: {
            width: number;
            height: number;
        };
        hasPassiveEventListeners: boolean;
        hasScreenOrientationAPI: boolean;
        hasOlderScreenOrientationAPI: boolean;
        screenDimension: {
            width: number;
            height: number;
        };
        isOnline: boolean;
        hasNativeFullscreenSupport: boolean;
        bwEstimate: number;
    };
    getPlayerVersion(): string;
    getPreload(): string;
    getPaused(): boolean;
    isLinearAdOn(): boolean;
    /**
     * @private
     */
    private _getCastCurrentTime;
    getCurrentTime(): number;
    getCurrentTimeBeforeSeek(): number;
    /**
     * @private
     */
    private _getCastDuration;
    getDuration(): number;
    getStreamType(): string;
    getBufferLength(type: string): number;
    getLoop(): boolean;
    setLoop(loop: boolean): void;
    getControls(): boolean;
    setControls(controls: boolean): void;
    getControlsVisible(): boolean;
    setControlsVisible(input: boolean): void;
    getFullscreen(): boolean;
    setFullscreen(fs: boolean): void;
    play(): void;
    pause(): void;
    /**
     * @private
     */
    private _postStop;
    stop(): void;
    postStopFn: any;
    seekTo(msSeek: number): void;
    dvrSeekTo(msSeek: number): void;
    syncToLiveEdge(): void;
    fastForward(): void;
    fastRewind(): void;
    getStreamMode(): string;
    getLiveCurrentTime(): number;
    getLiveDuration(): number;
    getLivePresentationStartTimeAsDate(): number;
    /**
     * @private
     */
    private _getVolumeAds;
    getVolume(): number;
    setVolume(inputVolume: number): void;
    getMute(): boolean;
    /**
     * @private
     */
    private _mute;
    volumeBeforeMute: number;
    /**
     * @private
     */
    private _unmute;
    setMute(muted: boolean): void;
    getPlaybackRate(): number;
    setPlaybackRate(rate: number): void;
    showCaptions(lng: string): void;
    hideCaptions(): void;
    getCCVisibleLanguage(): string;
    getCaptionsData(): object[];
    getCaptionsList(): string[][];
    setCaptionsList(ccFiles: string[][]): void;
    ccFiles: string[][];
    hasExternalCCFiles: boolean;
    rmpVttJS: VttJS;
    showPoster(): void;
    hidePoster(): void;
    setPoster(posters: string[] | string): void;
    poster: string;
    resize(): void;
    getPlayerWidth(): number;
    getPlayerHeight(): number;
    setPlayerSize(width: number, height: number): void;
    width: number;
    height: number;
    getWaitingUI(): boolean;
    setWaitingUI(ui: boolean): void;
    /******************************************* Logo API *******************************************/
    /**
     * @typedef {object} Logo
     * @property {string} img
     * @property {string} loc
     * @return {Logo}
     */
    getLogo(): Logo;
    setLogo(logo: Logo): void;
    logoLoc: any;
    logo: any;
    rmpLogo: Logo;
    getThumbnails(): string;
    setThumbnails(uri: string): void;
    seekBarThumbnailsLoc: string;
    rmpThumbnails: Thumbnails;
    getCamLat(): number;
    getCamLon(): number;
    getCamFov(): number;
    setCamLatLongFov(lat: number, lon: number, fov: number): void;
    resetCamLatLongFov(): void;
    /******************************************* Chapters API *******************************************/
    /**
     * @typedef {object} Chapter
     * @property {number} start
     * @property {number} end
     * @property {string} title
     * @return {Chapter[]}
     */
    getChapters(): {
        start: number;
        end: number;
        title: string;
    }[];
    seekToChapter(index: number): void;
    setChapters(uri: string): void;
    chaptersLoc: string;
    rmpChapters: Chapters;
    getCastMediaLoaded(): boolean;
    getCastConnected(): boolean;
    getCastUrl(): string;
    /******************************************* hls.js API *******************************************/
    /**
     * @typedef {object} Metadata
     * @property {object} data
     * @property {string} type
     * @return {Metadata}
     */
    getMetadata(): {
        data: object;
        type: string;
    };
    /**
     * @typedef {object} ManifestData
     * @property {object[]} levels
     * @property {object[]} audioTracks
     * @property {object[]} subtitles
     * @property {object[]} captions
     * @return {ManifestData}
     */
    getHlsManifestData(): {
        levels: object[];
        audioTracks: object[];
        subtitles: object[];
        captions: object[];
    };
    getHlsSessionData(): object;
    getHlsLevelData(): object;
    getHlsFragmentData(): object;
    getHlsFragmentBeingPlayedData(): object;
    hlsStartLoad(): void;
    hlsStopLoad(): void;
    getHlsJSInstance(): object;
    getShakaPlayerInstance(): object;
    getHtmlMediaElement(): object;
    getBitmovinAnalytics(): object;
    /**
     * @typedef {object} BitmovinAnalyticsConfig
     * @property {string} key
     * @property {string} videoId
     * @property {string} title
     * @type {(config: BitmovinAnalyticsConfig) => void}
     */
    setBitmovinAnalytics(config: any): void;
    bitmovinAnalyticsConfig: any;
    getBandwidthEstimate(): number;
    getErrorData(): object;
    setModuleOverlayVisible(type: string, visible: boolean): void;
    getModuleOverlayVisible(type: string): boolean;
    resetAutoplayCount(): void;
    getAutoplayMode(): string;
    getPlayerVisible(): boolean;
    /**
     * @typedef {object} Ratio
     * @property {number} player
     * @property {number} media
     * @return {Ratio}
     */
    getRatio(): {
        player: number;
        media: number;
    };
    getFramerate(): number;
    getDroppedFramesCount(): number;
    getCurrentFrameNumber(): number;
    getTotalFramesNumber(): number;
    seekToFrame(input: string): void;
    getSharingUrl(): string;
    setSharingUrl(input: string): void;
    sharingUrl: string;
    getSharingCode(): string;
    setSharingCode(input: string): void;
    sharingCode: string;
    getCurrentCuePointData(): {
        time?: number;
        text?: string;
    };
    getAdLinear(): boolean;
    getAdSystem(): string;
    getAdContentType(): string;
    getAdTitle(): string;
    getAdDescription(): string;
    getAdMediaUrl(): string;
    getAdMediaHeight(): number;
    getAdMediaWidth(): number;
    getAdCurrentTime(): number;
    getAdDuration(): number;
    getAdOnStage(): boolean;
    getAdPaused(): boolean;
    getAdTagUrl(): string;
    /**
     * @private
     */
    private _resetOutstreamAdUI;
    /**
     * @private
     */
    private _onAdDestroyLoadAds;
    loadAds(adTag: string, firstPlayAdRequest: boolean): void;
    adTagUrl: any;
    onAdDestroyLoadAdsFn: any;
    stopAds(): void;
    adOnStage: boolean;
    skipAd(): void;
    getAdSkippableState(): boolean;
    getAdUI(): boolean;
    setAdUI(adUI: boolean): void;
    getAdErrorMessage(): string;
    getAdVastErrorCode(): number;
    getAdErrorType(): string;
    getAdPodInfo(): object;
    getAdSkipTimeOffset(): number;
    getAdUniversalAdIds(): object[];
    getAdvertiserName(): string;
    getAdSurveyUrl(): string;
    /**
     * @param {number} adSlotWidth
     * @param {number} adSlotHeight
     * @param {object} [opt_settings]
     * @return {object[]}
     */
    getCompanionAds(adSlotWidth: number, adSlotHeight: number, opt_settings?: object): object[];
    getAdBlock(): boolean;
    getAdsManager(): object;
    getAdID(): string;
    getAdCreativeAdId(): string;
    getAdCreativeId(): string;
    getAdDealId(): string;
    getAdApiFramework(): string;
    getAdTraffickingParameters(): object;
    getAdTraffickingParametersString(): string;
    getAdWrapperAdIds(): string[];
    getAdWrapperAdSystems(): string[];
    getAdWrapperCreativeIds(): string[];
    getAdErrorCode(): number;
    getCompanionAd(): object;
    getAdParser(): string;
    getAdParserBlocked(): boolean;
    isVpaidCreative(): boolean;
    getTimeViewed(): number;
    getPercentViewed(): number;
    getCurrentTimeInPercent(): number;
    getTimeReady(): number;
    getStartUpTime(): number;
    getGaEventParameters(): object;
    setGaEventParameters(label: string): void;
    gaEventParameters: string;
    /******************************************* Floating API *******************************************/
    getFloating(): boolean;
    setFloating(floating: any): void;
    /******************************************* Audio API *******************************************/
    /**
     * @typedef {object} AudioTrack
     * @property {boolean} active
     * @property {number} id
     * @property {string} language
     * @return {AudioTrack[]}
     */
    getAudioTracks(): {
        active: boolean;
        id: number;
        language: string;
    }[];
    shakaAudioTrackMethodToUse: string;
    setAudioTrack(id: number): void;
    abrAutoMode: boolean;
    /******************************************* Quality API *******************************************/
    /**
     * @typedef {object} Bitrate
     * @property {boolean} active
     * @property {number} audioCodec
     * @property {number} bitrate
     * @property {number} height
     * @property {number} id
     * @property {string} videoCodec
     * @property {number} width
     * @return {Bitrate[]}
     */
    getBitrates(): {
        active: boolean;
        audioCodec: number;
        bitrate: number;
        height: number;
        id: number;
        videoCodec: string;
        width: number;
    }[];
    setBitrate(index: number): void;
    getAbrAutoMode(): boolean;
    getCurrentBitrateIndex(): number;
    destroy(): void;
    rmpApiDestroy: ApiDestroy;
    changingSrc: boolean;
    proceedApiDestroy: boolean;
    getContentMetadata(): {
        title?: string;
        description?: string;
        artist?: string;
        album?: string;
        id?: string;
        releaseDate?: string;
        thumbnail?: string;
        duration?: string;
        googleCastType?: string;
        artwork?: {
            src: string;
            sizes: string;
            type: string;
        }[];
        poster?: string[];
        endOfVideoPoster?: string[];
        animatedPoster?: string;
    };
    /**
     * @param {ContentMetadata} metadata
     * @param {boolean} [nofilter]
     * @return {void}
     */
    setContentMetadata(metadata: {
        title?: string;
        description?: string;
        artist?: string;
        album?: string;
        id?: string;
        releaseDate?: string;
        thumbnail?: string;
        duration?: string;
        googleCastType?: string;
        artwork?: {
            src: string;
            sizes: string;
            type: string;
        }[];
        poster?: string[];
        endOfVideoPoster?: string[];
        animatedPoster?: string;
    }, nofilter?: boolean): void;
    contentMetadata: any;
    getAppName(): string;
    /******************************************* Airplay API *******************************************/
    showAirplayPlaybackTargetPicker(): void;
    isOnline(): boolean;
    hasDownloadSupport(): boolean;
    /**
     * @typedef {object} DownloadedItem
     * @property {object} appMetadata
     * @property {number} duration
     * @property {number} expiration
     * @property {string} offlineUri
     * @property {string} originalManifestUri
     * @property {number} size
     * @return {DownloadedItem[]}
     */
    getDownloadedList(): {
        appMetadata: object;
        duration: number;
        expiration: number;
        offlineUri: string;
        originalManifestUri: string;
        size: number;
    }[];
    listDownloadedContent(): void;
    shakaOfflineList: any;
    download(metadata: object): void;
    shakaOfflineStoreOperation: any;
    abortDownload(): void;
    getDownloadProgress(): number;
    loadDownload(content: {
        appMetadata: object;
        duration: number;
        expiration: number;
        offlineUri: string;
        originalManifestUri: string;
        size: number;
    }): void;
    removeDownload(content: {
        appMetadata: object;
        duration: number;
        expiration: number;
        offlineUri: string;
        originalManifestUri: string;
        size: number;
    }): void;
    getCurrentPlaylistItemIndex(): number;
    setPlaylistItem(index: number): void;
    isPlaylist(): boolean;
    getPlaylistData(): object[];
    getPlaylistItem(index: number): object;
    setPlaylistItemCallback(callback: Function): void;
    playlistCallback: Function;
    resetPlaylistItemCallback(): void;
    setPlaylistData(playlistData: string | object[]): void;
    getCurrentRelatedItemIndex(): number;
    setRelatedItem(index: number): void;
    isRelated(): boolean;
    getRelatedData(): object[];
    getRelatedItem(index: number): object;
    setRelatedItemCallback(callback: Function): void;
    relatedCallback: Function;
    resetRelatedItemCallback(): void;
    setRelatedData(relatedData: string | object[]): void;
    /******************************************* SRC API *******************************************/
    _resumeSetSrc(src: any, backupSrc: any, pdIndex: any): void;
    rmpApiSrc: ApiSrc;
    /**
     * @param {Src} src
     * @param {Src} [backupSrc]
     * @param {number} [pdIndex]
     * @return {void}
     */
    setSrc(src: {
        hls?: string;
        dash?: string;
        mp4?: string[];
        webm?: string[];
        fps?: string;
        m4a?: string;
        mp3?: string;
        ogg?: string;
    }, backupSrc?: {
        hls?: string;
        dash?: string;
        mp4?: string[];
        webm?: string[];
        fps?: string;
        m4a?: string;
        mp3?: string;
        ogg?: string;
    }, pdIndex?: number): void;
    getSrc(): string;
    isChangingSrc(): boolean;
    getShakaCustomRequestFilter(): Function;
    setShakaCustomRequestFilter(shakaCustomRequestFilter: Function): void;
    shakaCustomRequestFilter: Function;
    getShakaRequestConfiguration(): object;
    setShakaRequestConfiguration(shakaRequestConfiguration: object): void;
    shakaRequestConfiguration: any;
    getShakaDrm(): {
        servers: object;
        clearKeys?: object;
        advanced?: object;
    };
    setShakaDrm(shakaDrm: {
        servers: object;
        clearKeys?: object;
        advanced?: object;
    }): object;
    shakaDrm: {
        servers: object;
        clearKeys?: object;
        advanced?: object;
    };
}
declare class Utils {
    static initWindowRmpGlobals(): void;
    static polyfillFullscreenEvents(): void;
    static tcfapi(): void;
    static uspapi(): void;
    constructor(rmp: any);
    _rmp: any;
    _initialAutoplayRequest: boolean;
    set initialAutoplayRequest(value: boolean);
    get initialAutoplayRequest(): boolean;
    _filterFpsDrm(): void;
    updateQualityModuleIcon(quality: any): void;
    checkStreams(initFn: any, backupSrc: any, streamType: any): void;
    detectSrc(): void;
    fireAutoplayFailure(): void;
    autoplayFailureRestorePlayUI(): void;
    fireAutoplaySuccess(): void;
    playPromise(): void;
    fireLevelSwitchEvents(): void;
    error(code: any, event: any, logOnly: any): void;
    warning(code: any, event: any): void;
    selectRendition(index: any, event: any): void;
    selectAudioTrack(index: any, event: any): void;
    setUpAbrUI(): void;
    setAdVolume(v: any): void;
    setAdMute(muted: any): void;
    updateDurationText(duration: any, currentTime: any): void;
    refreshHtml5VideoErrorManagement(): void;
    refreshHtml5VideoEndedManagement(): void;
    initialListParsing(item0: any): void;
    listParsing(newItem: any): void;
    filterList(inputPlaylist: any): any;
}
declare class ReadyManagement {
    constructor(rmp: any);
    _rmp: any;
    _timeReady: number;
    get timeReady(): number;
    _onImaDaiAvailable(): void;
    _imaDaiError(): void;
    _readyAds(): void;
    _dispatchReadyEvent(): void;
    _restoreQuality(): void;
    _manageOffsetPosition(): void;
    _setInitialVolume(inputVolume: any): void;
    _manageInitialVolume(): void;
    _customModuleFilter(): void;
    _customModuleInteraction(callback: any, event: any): void;
    _customModuleInit(): void;
    minimalFire(): void;
    fire(): void;
    init(): void;
}
declare class SizeManagement {
    constructor(rmp: any);
    _rmp: any;
    _throttledResizeFn: any;
    _offsetRelated: number;
    _initialAspectRatio: number;
    _initialWidth: number;
    _initialHeight: number;
    _parentElementWidth: number;
    _orientationChangeResizeTimeoutFn: number;
    _throttledResizeTimeout: any;
    set initialWidth(width: number);
    get initialWidth(): number;
    set initialHeight(height: number);
    get initialHeight(): number;
    _throttledResize(e: any): void;
    _updateUpNext(relatedItems: any): void;
    _attachWindowEvents(): void;
    auxiliaryResize(): void;
    resizeAds(): void;
    resizeRelated(): void;
    destroy(): void;
    resizePlayer(initialSizing: any): void;
    initialSizing(): void;
}
declare class EventsManagement {
    constructor(rmp: any);
    _rmp: any;
    _playerWaiting: boolean;
    _loopEventFired: boolean;
    _firstTimeupdate: boolean;
    _currentTimeBeforeSeek: number;
    _currentTimeBeforeAd: number;
    _onAdStartedPostRollUpdateCentralUIFn: any;
    _unstalledBufferFn: any;
    _dvrCurrentTime: number;
    get firstTimeupdate(): boolean;
    get currentTimeBeforeSeek(): number;
    get currentTimeBeforeAd(): number;
    get dvrCurrentTime(): number;
    _updateProgress(): void;
    _stalledBuffer(): void;
    _onAdStartedPostRollUpdateCentralUI(): void;
    _writeCurrentTimeToLocalStorage(currentTime: any, id: any): void;
    _writeQualityToLocalStorage(quality: any): void;
    _removeCurrentTranscriptsItem(): void;
    _checkInView(container: any, element: any): boolean;
    durationchangeCallback(): void;
    loadedmetadataCallback(): void;
    wireUnstalledBufferEvents(): void;
    unwireUnstalledBufferEvents(): void;
    unstalledCallback(): void;
    waitingCallback(): void;
    endedListCallback(): void;
    endedCallback(): void;
    attachAuxiliaryEvents(): void;
    pauseCallback(): void;
    playCallback(): void;
    timeupdateCallback(): void;
}
declare class DomManagement {
    constructor(rmp: any);
    _rmp: any;
    _touchRmp: boolean;
    _onMobileStartAutoHideCentralUIFn: any;
    _containerTouch(event: any): void;
    _containerClick(event: any): void;
    _containerDBClick(event: any): void;
    _outlineInteraction(event: any): void;
    _onMobileStartAutoHideCentralUI(): void;
    _appendMobileCentralUI(): void;
    _appendCentralPlay(): void;
    _appendLoadingSpin(): void;
    _mediaTagError(event: any): void;
    prepare(): void;
    append(): void;
}
declare class PlaybackManagement {
    constructor(rmp: any);
    _rmp: any;
    _playerInitialized: boolean;
    _adImaDisplayContainerInitialized: boolean;
    _firstPlay: boolean;
    _firstFrameReached: boolean;
    _startUpPlaying: number;
    _startUpPlay: number;
    _startUpTime: number;
    _startUpLogPlayingFn: any;
    _onAdAutoplayFailedFn: any;
    _onAdAutoplaySuccessFn: any;
    _processInitiatePlaybackFn: any;
    get startUpTime(): number;
    get firstPlay(): boolean;
    set playerInitialized(initialized: boolean);
    get playerInitialized(): boolean;
    get adImaDisplayContainerInitialized(): boolean;
    get firstFrameReached(): boolean;
    _startUpLogPlaying(): void;
    _onAdAutoplayFailed(): void;
    _onAdAutoplaySuccess(): void;
    _firstPlayAdRequest(): void;
    _firstPlaySteps(): void;
    _doPlay(): void;
    _processInitiatePlayback(): void;
    _resumePlaybackInit(): void;
    unwireAdAutoplayEvents(): void;
    init(event: any): void;
}
declare class InitManagement {
    constructor(rmp: any);
    _rmp: any;
    _copyBackupSrc: any[];
    _validatedLanguage: string;
    _originalAdSchedule: {};
    _scheduleHasMidRolls: boolean;
    _onErrorSetBackupSrcFn: any;
    _originalAdTagUrl: string;
    _originalAdTagWaterfall: any[];
    _imaDaiLive: boolean;
    _imaDaiVod: boolean;
    _imaDaiPod: boolean;
    _imaDaiUseNativeHls: boolean;
    _ccFilesNativeTextTracksLoadedCount: number;
    _hasTranscripts: boolean;
    _durationchangeFn: any;
    _loadedmetadataFn: any;
    _waitingFn: any;
    _pauseFn: any;
    _playFn: any;
    _timeupdateFn: any;
    _iosExternalCCFilesWebkitbeginfullscreenFn: any;
    _iosExternalCCFilesWebkitendfullscreenFn: any;
    _onReplayLoadAdTagFn: any;
    _onEndedWaitForPlayFn: any;
    get hasTranscripts(): boolean;
    get validatedLanguage(): string;
    get scheduleHasMidRolls(): boolean;
    set ccFilesNativeTextTracksLoadedCount(index: number);
    get ccFilesNativeTextTracksLoadedCount(): number;
    get originalAdTagUrl(): string;
    get originalAdTagWaterfall(): any[];
    get imaDaiLive(): boolean;
    get imaDaiVod(): boolean;
    get imaDaiPod(): boolean;
    get imaDaiUseNativeHls(): boolean;
    _createNativeSrcCallback(): void;
    _createNativeSrc(streamType: any): void;
    _runNativeHls(hlsType: any): void;
    _runWebM(): void;
    _runMp4(): void;
    _runOutStream(): void;
    _runAudioProgressiveDownload(type: any): void;
    _runHtml5Audio(): void;
    _onErrorSetBackupSrc(): void;
    _iosExternalCCFilesWebkitbeginfullscreen(): void;
    _iosExternalCCFilesWebkitendfullscreen(): void;
    _initIosExternalCCFiles(): void;
    _initLanguage(): void;
    _onReplayLoadAdTag(): void;
    _onEndedWaitForPlay(): void;
    _initAds(): void;
    _adBlockButtonCallback(event: any): void;
    _initAdBlockDetectionPreventPlayback(): void;
    _init360(): void;
    _initAudioOnly(): void;
    _initCustomIcons(): void;
    _initMatomoTracking(): void;
    _initFullscreenManagement(): void;
    _initConfig(): void;
    iosAddTrackElements(): void;
    runPlayer(): void;
    postAutoplayDetection(): void;
    wireIosExternalCCFiles(): void;
    unwireIosExternalCCFiles(): void;
    unwireHtml5VideoEvents(): void;
    unwireInitEvents(): void;
    createVideoTag(): void;
}
declare class UIManagement {
    constructor(rmp: any);
    _rmp: any;
    _chromeTimerInterval: number;
    _checkResetTimer(): boolean;
    _resetTimer(): void;
    _prepForFullWindowSkin(): void;
    hideChrome(): void;
    showChrome(): void;
    showCentralPlay(): void;
    hideCentralPlay(): void;
    showLoadingSpin(): void;
    hideLoadingSpin(): void;
    hideControlsUI(): void;
    showControlsUI(): void;
    restorePlayUI(): void;
    appendContentTitle(): void;
    appendContentDescription(): void;
    prepareLiveUI(): void;
    appendCSSForCustomIcons(icons: any, adOutStream: any, tvPlayerSkin: any): void;
    prepareSkin(): void;
    destroy(): void;
}
declare class ModuleManagement {
    constructor(rmp: any);
    _rmp: any;
    _firstHint: boolean;
    get openableTypes(): string[];
    _playPauseModule(event: any): void;
    appendHint(type: any, label: any): void;
    destroy(type: any): void;
    closeButtonAdjust(type: any, fcc: any): void;
    open(type: any, event: any): void;
    close(type: any, event: any): void;
    closeAll(): void;
    updatePlayPauseUI(paused: any): void;
    appendToControlBar(type: any): void;
    appendNew(type: any): void;
    appendOverlay(type: any): void;
    setActiveLevel(type: any, newLevelIndex: any): void;
}
declare class LogsManagement {
    constructor(rmp: any);
    _rmp: any;
    _logUri: string;
    _runLogsFn: any;
    _runLogsOnSrcChangedFn: any;
    _logRetryTimeout: number;
    _sendLog(formData: any): Promise<any>;
    _getCheckSum(playerVersion: any): number;
    _getRmpBackLog(): number;
    _hasFormData(): boolean;
    _appendFormDataAndSendLog(): void;
    _runLogsOnSrcChanged(): void;
    _runLogs(): void;
    destroy(): void;
    init(): void;
}
declare class Accessible {
    constructor(rmp: any);
    _rmp: any;
    _elementsFocus: any[];
    _bindKeyboardFn: any;
    _removeFocusToContainerFn: any;
    _addTabKeyDetectionFn: any;
    _preventKeyDownFn: any;
    _addFocus(element: any): void;
    _removeFocus(element: any): void;
    _addTabKeyDetection(event: any): void;
    _playOrPause(): void;
    _bindKeyboard(event: any): void;
    _preventKeyDown(event: any): void;
    button(element: any, ariaLabel: any, callClick: any, type: any, keyboardShortcut: any): void;
    destroy(): void;
    init(): void;
}
declare class ColorsManagement {
    constructor(rmp: any);
    _rmp: any;
    _backgroundColor(): void;
    _buttonColor(): void;
    _accentColor(): void;
    applySkinColors(): void;
}
declare class License {
    constructor(rmp: any);
    _rmp: any;
    _fileProtocol: boolean;
    _isLocal: boolean;
    _isLicValid: string;
    _licType: string;
    _licUrl: string;
    _hostname: any;
    _siteCheckerRetryTimeout: number;
    _rmpPlusCheckerRetryTimeout: number;
    _platformArrayList: any[];
    _platformAppArrayList: any[];
    _platformListType: string;
    _vgsUri: string;
    _vgtUri: string;
    _vgrpUri: string;
    get hostname(): any;
    get type(): string;
    _isTrial(decodedKey: any): any[];
    _isLocalTest(testSite: any): boolean;
    _onRmpPromiseResolved(data: any): void;
    _siteChecker(url: any): void;
    _checkForCustomList(customer: any): void;
    _postCustomListCheck(): void;
    _getCustomList(customer: any): void;
    _onPlatformPromiseResolved(data: any): void;
    _rmpPlusChecker(url: any): void;
    _isValidKey(key: any, testSite: any): 0 | 1 | 2 | 3;
    destroy(): void;
    terminate(endType: any): void;
    validate(): boolean;
}
declare class VolumeManagement {
    constructor(rmp: any);
    _rmp: any;
    _volumeMouseupFn: any;
    _volumeMousemoveFn: any;
    _updateVolumeBarUI(currentVolume: any): void;
    _onVolumeChange(): void;
    _volumeMouseup(event: any): void;
    _volumeMousemove(event: any): void;
    _onClickVolumeIcon(event: any): void;
    updateVolumeIcon(currentVolume: any): void;
    destroy(): void;
    init(): void;
}
declare class FullscreenManagement {
    constructor(rmp: any);
    _rmp: any;
    _iosWebkitbeginfullscreenFn: any;
    _iosWebkitendfullscreenFn: any;
    _manageFSOnOrientationChangeFn: any;
    _fullscreenchangeFn: any;
    _fullscreenerrorFn: any;
    _manageFSOnOrientationChange(e: any): void;
    _fullscreenButtonInteraction(event: any): void;
    _fullscreenchange(): void;
    _fullscreenerror(event: any): void;
    _webkitbeginfullscreen(): void;
    _webkitendfullscreen(): void;
    wireIosFullscreen(): void;
    unwireIosFullscreen(): void;
    executeFullscreenRequest(): void;
    destroy(): void;
    init(): void;
}
declare class SeekManagement {
    constructor(rmp: any);
    _rmp: any;
    _draggingTimeCursor: boolean;
    _touchDown: boolean;
    _onMouseupSeekFn: any;
    _onMousemoveUpdateCurrentTimeFn: any;
    _hideIndicatorTimeout: number;
    get draggingTimeCursor(): boolean;
    get touchDown(): boolean;
    _updateCurrentTime(event: any): void;
    _onTouchendSeek(event: any): void;
    _onTouchmoveUpdateCurrentTime(event: any): void;
    _onMouseupSeek(event: any): void;
    _getThumbnailImageTrack(): any;
    _showThumbnail(imageTrack: any, currentTimeHover: any): Promise<void>;
    _mouseMoveIndicator(e: any): void;
    _mouseEnterIndicator(): void;
    _mouseLeaveIndicator(): void;
    _initIndicator(): void;
    _setDvrVodUI(): void;
    destroy(): void;
    appendSeekBar(): void;
    executeSeek(time: any): void;
}
declare class PosterManagement {
    constructor(rmp: any);
    _rmp: any;
    _onAnimatedPosterLoadFn: any;
    _onAnimatedPosterErrorFn: any;
    _onPosterLoadFn: any;
    _onPosterErrorFn: any;
    _onAnimatedPosterLoad(): void;
    _onAnimatedPosterError(event: any): void;
    _onPosterLoad(): void;
    _onPosterError(event: any): void;
    _adjustPosterFit(element: any): void;
    filterPoster(): void;
    wirePosterLoadEvents(): void;
    unwirePosterLoadEvents(): void;
    initAnimatedPoster(): void;
    init(): void;
}
declare class GoogleAnalytics {
    constructor(rmp: any);
    _rmp: any;
    _gaContext: boolean;
    _fullMinuteWatchedInterval: number;
    _fullMinuteWatchedTicker: number;
    _errorFn: any;
    _adErrorFn: any;
    _playerStartFn: any;
    _srcChangedFn: any;
    _adImpressionFn: any;
    _bufferStalledFn: any;
    _bufferNotStalledAnymoreFn: any;
    _enterFullscreenFn: any;
    _exitFullscreenFn: any;
    _gaEndedFn: any;
    _adClickFn: any;
    _readyFn: any;
    _seekingFn: any;
    _gaPauseFn: any;
    _adParserLoadErrorFn: any;
    _hasGtag(): boolean;
    _ready(): void;
    _playerStart(): void;
    _srcChanged(): void;
    _error(): void;
    _pause(): void;
    _adImpression(): void;
    _adError(): void;
    _adClick(): void;
    _bufferNotStalledAnymore(): void;
    _bufferStalled(): void;
    _enterFullscreen(): void;
    _exitFullscreen(): void;
    _ended(): void;
    _adParserLoadError(): void;
    _seeking(): void;
    _filterInputGaEvents(gaEvents: any): any[];
    destroy(): void;
    init(): void;
}
declare class GoogleCast {
    constructor(rmp: any);
    _rmp: any;
    _castSessionResumed: boolean;
    _castDisplayMessage: any;
    _castDisplayMessageStatus: any;
    _castError: boolean;
    _castContentType: string;
    _castModuleSet: boolean;
    _castTitle: string;
    _castContext: any;
    _castAdSkipOffset: boolean;
    _castMediaTracks: any[];
    _remotePlayerState: string;
    _remotePlayerController: any;
    _volumeBeforeCasting: number;
    _mutedBeforeCasting: boolean;
    _adSkipIntervalFn: number;
    _castPlayerStateChangedFn: any;
    _castPlayerIsConnectedChangedFn: any;
    _castVolumeLevelChangedFn: any;
    _castIsPausedChangedFn: any;
    _castSessionInfoFn: any;
    _castCurrentTimeChangedFn: any;
    _castDurationChangedFn: any;
    _castStateChangedFn: any;
    _castIsPlayingBreakChangedFn: any;
    _castWhenSkippableChangedFn: any;
    _onEndedReloadMediaOnCastingDeviceFn: any;
    _onPlayingSetupRemotePlayerFn: any;
    _castInteractionFn: any;
    _initCastFn: any;
    _onClickSkipAdFn: any;
    get remotePlayerState(): string;
    get remotePlayerController(): any;
    _resetCast(): void;
    _updateCastDisplayMessage(): void;
    _onEndedReloadMediaOnCastingDevice(): void;
    _setupCastRemotePlayer(): void;
    _castPlayerStateChanged(): void;
    _onPlayingSetupRemotePlayer(): void;
    _castPlayerIsConnectedChanged(): void;
    _castIsPausedChanged(): void;
    _castCurrentTimeChanged(): void;
    _castDurationChanged(): void;
    _castVolumeLevelChanged(event: any): void;
    _castIsPlayingBreakChanged(): void;
    _onClickSkipAd(event: any): void;
    _adSkipInterval(): void;
    _appendSkipUI(): void;
    _castWhenSkippableChanged(): void;
    _castInteraction(event: any): void;
    _setupCastModule(): void;
    _castStateChanged(event: any): void;
    _castSessionInfo(event: any): void;
    _initCast(): void;
    _setCastTextStyle(): any;
    _castTextForegroundColor: string;
    _castTextBackgroundColor: string;
    _castTextEdgeType: any;
    _castTextFontFamily: any;
    _castTextFontScale: any;
    _castTextWindowColor: string;
    resetCastTextSettings(): void;
    setCastTextTrack(index: any): void;
    setCastAudioTrack(index: any): void;
    isCastMediaLoaded(): boolean;
    loadCastMedia(newSession: any): void;
    clearCastSkipInterval(): void;
    destroy(): void;
    init(): void;
}
declare class GoogleCastCordova {
    constructor(rmp: any);
    _rmp: any;
    _castContentType: string;
    _castTitle: string;
    _castDisplayMessageElement: any;
    _remoteCurrentTime: number;
    _remoteVolume: number;
    _castSessionStopping: boolean;
    _castMediaStatusInterval: number;
    _castMediaEnded: boolean;
    _castInteractionFn: any;
    _castMediaStatusUpdatedFn: any;
    _initCastFn: any;
    get castMediaEnded(): boolean;
    _resetCast(): void;
    _castUpdateDisplayMessage(message: any): void;
    _setupLocalPlayer(): void;
    _addCastingCordovaUI(): void;
    _castInteraction(event: any): void;
    _handleMediaEnded(): void;
    _castMediaStatusUpdated(isAlive: any): void;
    _setUpCastModule(): void;
    _initCast(): void;
    loadDebug(): void;
    resetCastTextSettings(): void;
    setCastTextTrack(): void;
    setCastAudioTrack(): void;
    isCastMediaLoaded(): boolean;
    loadCastMedia(newSession: any): void;
    destroy(resumeLocalPlayer: any): void;
    init(): void;
}
declare class Mux {
    constructor(rmp: any);
    _rmp: any;
    _onErrorEmitMuxErrorFn: any;
    _shakaPlayerMux: any;
    get shakaPlayer(): any;
    _onErrorEmitMuxError(): void;
    destroy(): void;
    init(): void;
    initHlsJS(): void;
    initShakaPlayer(): void;
    initHTML5(): void;
}
declare class Autoplay {
    _setupDefaultValues(options: any): any;
    _startPlayback({ muted, timeout, inline }: {
        muted: any;
        timeout: any;
        inline: any;
    }, elementCallback: any): Promise<any>;
    _video(options: any): Promise<any>;
    _audio(options: any): Promise<any>;
    detect(media: any, detectAutoplayTimeout: any, muted: any): Promise<any>;
}
declare class VttJS {
    constructor(rmp: any, ccFiles: any);
    _rmp: any;
    _ccCues: any[];
    _ccEnabled: boolean;
    _ccData: any;
    _updateCuesResizeFn: any;
    set ccData(value: any);
    get ccData(): any;
    set ccEnabled(value: boolean);
    get ccEnabled(): boolean;
    _ajaxCall(i: any): Promise<void>;
    _updateCues(): void;
    _loadVTTFiles(): void;
    parse(caption: any): void;
    destroy(): void;
    init(): void;
}
declare class Logo {
    constructor(rmp: any);
    _rmp: any;
    _onLogoLoadFn: any;
    _onLogoErrorFn: any;
    _openLogoUrlFn: any;
    _logoImg: HTMLImageElement;
    _onLogoLoad(): void;
    _onLogoError(event: any): void;
    _openUrl(event: any): void;
    hide(): void;
    show(): void;
    init(): void;
    update(): void;
}
declare class Thumbnails {
    constructor(rmp: any);
    _rmp: any;
    _dummyThumbnailsImg: HTMLImageElement;
    _onThumbnailsLoadFn: any;
    _onThumbnailsErrorFn: any;
    _thumbnailsArray: any[];
    _thumbnailURIs: any[];
    _thumbnailURIsTimestamps: any[];
    _currentThumbnailURI: string;
    get array(): any[];
    get uris(): any[];
    get urisTimestamps(): any[];
    set currentURI(uri: string);
    get currentURI(): string;
    _resetDummyThumbnailsImg(): void;
    _onThumbnailsLoad(thumbnailsURL: any): void;
    _onThumbnailsError(error: any): void;
    _parseThumbnailsVtt(data: any): void;
    appendThumbnailsElement(): void;
    destroy(): void;
    init(): void;
}
declare class Chapters {
    constructor(rmp: any);
    _rmp: any;
    _chapterDivs: any[];
    _updateCurrentChapterFn: any;
    _chaptersArray: any[];
    get array(): any[];
    _seekToChapter(ms: any, event: any): void;
    _updateCurrentChapter(): void;
    _onLoadedmetadaAddChapters(): void;
    _parseChaptersVtt(data: any): void;
    destroy(): void;
    init(): void;
}
declare class ApiDestroy {
    constructor(rmp: any);
    _rmp: any;
    _adsDestroyed: boolean;
    _postImaAdDestroyFn: any;
    _destroyRunning: boolean;
    get running(): boolean;
    _fireDestroyCompleted(): void;
    _postImaAdDestroy(): void;
    _destroyAds(): void;
    _checkForPiP(): void;
    _destroyBuffer(): void;
    _postAdsDestroy(): void;
    clear(): void;
}
declare class ApiSrc {
    constructor(rmp: any);
    _rmp: any;
    _nextReadingMp4: boolean;
    _nextReadingWebM: boolean;
    _nextReadingM4a: boolean;
    _nextReadingMp3: boolean;
    _nextReadingOgg: boolean;
    _nextReadingHlsJS: boolean;
    _nextReadingShaka: boolean;
    _nextReadingHls: boolean;
    _setSrcAdReset: boolean;
    _setSrcResetAdInterval: number;
    _afterSrcSwitchFn: any;
    _checkStreamsCallback(): void;
    _updateReadingSrc(): void;
    _runNextPlayer(): void;
    _resetHtml5VideoTagEvents(): void;
    _reAttachHtml5VideoEvents(): void;
    _fireSrcChanged(): void;
    _afterSrcSwitch(event: any): void;
    _resetSrc(pdIndex: any): void;
    _resetAds(): void;
    _resetHtml5MediaBuffer(streamType: any): void;
    _readingNextSrc(): void;
    _resetBuffer(): void;
    clear(): void;
    init(src: any, backupSrc: any, pdIndex: any): void;
}
