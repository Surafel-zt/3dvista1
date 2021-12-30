(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1ACFAC1F_0BE5_6EA5_4179_19E2C0D70E8A"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -14.93,
   "backwardYaw": 172.21,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -13.31,
   "backwardYaw": 172.21,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.19,
   "backwardYaw": -3.27,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.33,
   "backwardYaw": -3.27,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -169.54,
   "backwardYaw": -3.27,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
 "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg",
 "label": "8",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
  "this.overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
  "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0",
  "this.overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
  "this.overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
  "this.overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18EC9DC6_0BE5_69A7_41A1_693B0510F3E2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A24ECDE_0BE5_6FA7_419E_C7AAC23F0164"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AA34C65_0BE5_6E9A_417E_95926074D9C3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A8FBC79_0BE5_6F6A_4193_4F2B6D8685CC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.29,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A469CBF_0BE5_6FE5_4199_7F3B50A4F4F5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "media": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A2E3CD3_0BE5_6FBD_41A5_A0F2FC4CB06D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18922E5B_0BE5_6AAE_417F_DBE8CA8977E2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1973BBD8_0BE5_69AB_4193_E5BB6A403899"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18DE7DFF_0BE5_6965_419D_F8A394B88304"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.18,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19478D85_0BE5_69A5_4180_863283A2F77F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19E42D12_0BE5_6EBF_41A4_7921AD20935F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AADCC5C_0BE5_6EAA_41A1_346A8AA521D0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18820E4B_0BE5_6AAE_41A0_E85CB0AA9980"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19863BA8_0BE5_69EB_4184_F8FF625EF95A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19F55D1B_0BE5_6EAD_4192_FC2911423F03"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18273EAF_0BE5_6BE5_41A4_DC8A869C6852"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1864AE6A_0BE5_6B6E_41A2_BBCD7007F87D"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.83,
   "backwardYaw": 0.5,
   "distance": 1,
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 175.79,
   "backwardYaw": 0.5,
   "distance": 1,
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.47,
   "backwardYaw": 0.5,
   "distance": 1,
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.9,
   "backwardYaw": -123.45,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
 "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg",
 "label": "3",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
  "this.overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
  "this.overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
  "this.overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
  "this.overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
  "this.overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
  "this.overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
  "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A846C84_0BE5_6F9A_41A0_8AB40C3A94D4"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
 "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg",
 "label": "13",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
  "this.overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
  "this.overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
  "this.overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
  "this.overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
  "this.overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
  "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18FEDDE1_0BE5_699D_416C_64FB90765640"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A90DC97_0BE5_6FA5_41A0_AA968312C91E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.18,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19758D7B_0BE5_696D_4192_19DD8F1BA450"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 120.71,
   "backwardYaw": -55.5,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 122.11,
   "backwardYaw": -55.5,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 131.26,
   "backwardYaw": 45.02,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.41,
   "backwardYaw": 45.02,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 133.54,
   "backwardYaw": 45.02,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -167.55,
   "backwardYaw": 82.62,
   "distance": 1,
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
 "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg",
 "label": "14",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
  "this.overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
  "this.overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
  "this.overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
  "this.overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
  "this.overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
  "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19ACFD3A_0BE5_6EEF_41A3_A23EF31ADEFA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.95,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A709CB5_0BE5_6FE5_4153_323F5A86E1CF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19393DA8_0BE5_69EB_4197_1C5F40427844"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -5.9,
   "backwardYaw": 149.6,
   "distance": 1,
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.93,
   "backwardYaw": 149.6,
   "distance": 1,
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
 "thumbnailUrl": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_t.jpg",
 "label": "!1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_EB6F7DCD_E647_2976_41E0_3A09E20D7520",
  "this.overlay_F14A027E_E64B_1B12_41E0_619255D25C94",
  "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19676BC5_0BE5_69A5_41A3_44F2E78533DF"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.27,
   "backwardYaw": -168.19,
   "distance": 1,
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.1,
   "backwardYaw": -168.19,
   "distance": 1,
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.45,
   "backwardYaw": 86.9,
   "distance": 1,
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -118.7,
   "backwardYaw": 86.9,
   "distance": 1,
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 132.02,
   "backwardYaw": -90.35,
   "distance": 1,
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.22,
   "backwardYaw": -90.35,
   "distance": 1,
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
 "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg",
 "label": "4",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_F255C89C_E647_3716_41D6_45837819D966",
  "this.overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
  "this.overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
  "this.overlay_F091E393_E6D9_7912_41EA_45A20199469E",
  "this.overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
  "this.overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
  "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -2.34,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.34,
  "pitch": -2.45
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": -2.45,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.04,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19804D59_0BE5_6EAD_4180_741F8EE034F0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18744E7F_0BE5_6B65_418E_9A3F283E36CF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A995C8E_0BE5_6FA6_41A7_444EF330DBF7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AC5DC33_0BE5_6EFE_4195_729232D9700A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_199CDBB2_0BE5_69FF_4197_12DDD51B7B32"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1ADFCC3D_0BE5_6EEA_419F_95FB7111242C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.59,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A00FCFE_0BE5_6F67_4173_794CCF992A88"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A5A8CC9_0BE5_6FAD_41A5_1B3DAE12A507"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 44.43,
   "backwardYaw": 38.46,
   "distance": 1,
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 29.96,
   "backwardYaw": 38.46,
   "distance": 1,
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977"
  }
 ],
 "hfov": 360,
 "label": "7",
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
 "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 136,
 "class": "Panorama",
 "hfovMin": "135%",
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
  "this.overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
  "this.overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
  "this.overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
  "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A65DCA1_0BE5_6F9D_4184_0EAD25EF3137"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.64,
  "pitch": -4.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.53,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1928FD9C_0BE5_69AB_41A2_63E004B21798"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_197E7BCF_0BE5_69A5_4195_A0C2D4AFCC21"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AC93C29_0BE5_6EEA_419C_3219350E3B2F"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -90.35,
   "backwardYaw": 132.02,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.23,
   "backwardYaw": 132.02,
   "distance": 1,
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.46,
   "backwardYaw": 44.43,
   "distance": 1,
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 33.66,
   "backwardYaw": 44.43,
   "distance": 1,
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
 "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg",
 "label": "5",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
  "this.overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
  "this.overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
  "this.overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
  "this.overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
  "this.overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
  "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AF21C15_0BE5_6EA5_4124_EAC19D5342C4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19BC1D44_0BE5_6E9B_419B_7598F87E01F1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.17,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19475BE3_0BE5_699D_4176_B22AD95AB51B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AB81C6F_0BE5_6F66_4196_AFC6EAEF4BD7"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 163.66,
   "backwardYaw": -1.78,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -142.82,
   "backwardYaw": 135.51,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -145.22,
   "backwardYaw": 135.51,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -146.95,
   "backwardYaw": 135.51,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -131.41,
   "backwardYaw": 144.32,
   "distance": 1,
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
 "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg",
 "label": "10",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
  "this.overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
  "this.overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
  "this.overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
  "this.overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
  "this.overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
  "this.overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
  "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A388CE8_0BE5_6F6B_419F_057FAA9ACD0C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19C87D25_0BE5_6EE5_4188_16A514CFA325"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_191B3DBB_0BE5_69ED_419A_D6B32A8D78A3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18CEADF0_0BE5_697B_4190_7D2411198AA8"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 172.21,
   "backwardYaw": -14.93,
   "distance": 1,
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.05,
   "backwardYaw": -14.93,
   "distance": 1,
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.84,
   "backwardYaw": -14.93,
   "distance": 1,
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.78,
   "backwardYaw": 163.66,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 5.04,
   "backwardYaw": 163.66,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -68.96,
   "backwardYaw": -163.05,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -62.54,
   "backwardYaw": -163.05,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -55.5,
   "backwardYaw": 120.71,
   "distance": 1,
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
 "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg",
 "label": "9",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
  "this.overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
  "this.overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
  "this.overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
  "this.overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
  "this.overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
  "this.overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
  "this.overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
  "this.overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
  "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AD4EC51_0BE5_6EBA_41A3_E863B5E23F80"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18D09E14_0BE5_6ABB_4192_63AABC1D0D31"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19926BBB_0BE5_69ED_4174_ADD9490CC3DE"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 144.32,
   "backwardYaw": -131.41,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 134.28,
   "backwardYaw": -131.41,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.47,
   "backwardYaw": -46.39,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 162.19,
   "backwardYaw": -46.39,
   "distance": 1,
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.62,
   "backwardYaw": -167.55,
   "distance": 1,
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.53,
   "backwardYaw": -167.55,
   "distance": 1,
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
 "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg",
 "label": "15",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
  "this.overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
  "this.overlay_E72758A0_F261_12F4_41AB_217536E83188",
  "this.overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
  "this.overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
  "this.overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
  "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19D99D30_0BE5_6EFB_4198_5088D73A5F0E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1AD82C47_0BE5_6EA6_4187_04A7B4E8BCA1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1856CE9E_0BE5_6BA7_418A_8C4CB8BF701A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.53,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19572D90_0BE5_69BB_418C_77FFC5E4A36A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19912D66_0BE5_6967_419C_856FB5546BD1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18A06E23_0BE5_6A9D_4193_5067D77B0497"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.03,
   "backwardYaw": 175.93,
   "distance": 1,
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.6,
   "backwardYaw": -5.9,
   "distance": 1,
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.56,
   "backwardYaw": -5.9,
   "distance": 1,
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.03,
   "backwardYaw": -5.9,
   "distance": 1,
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002",
 "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg",
 "label": "1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
  "this.overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
  "this.overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
  "this.overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
  "this.overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
  "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_18B2AE36_0BE5_6AE7_419C_53391EF25812"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.95,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A7B9CAB_0BE5_6FED_4190_FC6E315E366D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.04,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_198EDD4E_0BE5_6EA7_41A3_74917CD7746B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "yaw": 60.87,
  "pitch": -0.06
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_190AEDB1_0BE5_69FD_4179_2081A1C8588A"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -163.05,
   "backwardYaw": -68.96,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -158,
   "backwardYaw": -68.96,
   "distance": 1,
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 45.02,
   "backwardYaw": 131.26,
   "distance": 1,
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.01,
   "backwardYaw": 131.26,
   "distance": 1,
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 135.51,
   "backwardYaw": -142.82,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 138.09,
   "backwardYaw": -142.82,
   "distance": 1,
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46.39,
   "backwardYaw": 154.47,
   "distance": 1,
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.89,
   "backwardYaw": 154.47,
   "distance": 1,
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
 "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg",
 "label": "12",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
  "this.overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
  "this.overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
  "this.overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
  "this.overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
  "this.overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
  "this.overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
  "this.overlay_E5012374_F261_165C_41E2_26D991B3488F",
  "this.overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
  "this.overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
  "this.overlay_EACCB364_F261_367C_41CD_A12E896F212C",
  "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1846BE8F_0BE5_6BA6_4193_07D5C3FCE5CA"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 175.93,
   "backwardYaw": -7.03,
   "distance": 1,
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.71,
   "backwardYaw": -7.03,
   "distance": 1,
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.5,
   "backwardYaw": 169.83,
   "distance": 1,
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
 "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg",
 "label": "2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
  "this.overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
  "this.overlay_FFD33961_E647_292E_41E2_4E840151C994",
  "this.overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
  "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_19649D70_0BE5_697B_419B_AA69F783DEF6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.59,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A12ED08_0BE5_6EAB_4147_5A141DE4EC08"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_1A0D1CF3_0BE5_6F7D_4190_71C4AB1DAB13"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera"
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "left": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "bottom": 0,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 400,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 50,
 "playbackBarHeadHeight": 15
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_18DE7DFF_0BE5_6965_419D_F8A394B88304); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
   "pitch": 1.93,
   "yaw": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
 "maps": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_18D09E14_0BE5_6ABB_4192_63AABC1D0D31); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
 "maps": [
  {
   "hfov": 31.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 96,
      "height": 200
     }
    ]
   },
   "pitch": -3.08
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_18A06E23_0BE5_6A9D_4193_5067D77B0497); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
 "maps": [
  {
   "hfov": 24.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 200
     }
    ]
   },
   "pitch": 1.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_18B2AE36_0BE5_6AE7_419C_53391EF25812); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
 "maps": [
  {
   "hfov": 34.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 102,
      "height": 200
     }
    ]
   },
   "pitch": 1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_18820E4B_0BE5_6AAE_41A0_E85CB0AA9980); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.86,
   "image": "this.AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
   "pitch": 5.81,
   "yaw": -169.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4",
 "maps": [
  {
   "hfov": 8.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_19393DA8_0BE5_69EB_4197_1C5F40427844); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
 "maps": [
  {
   "hfov": 21.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 121,
      "height": 200
     }
    ]
   },
   "pitch": -20.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_190AEDB1_0BE5_69FD_4179_2081A1C8588A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.32,
   "image": "this.AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
   "pitch": -30.02,
   "yaw": 175.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
 "maps": [
  {
   "hfov": 4.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -30.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_191B3DBB_0BE5_69ED_419A_D6B32A8D78A3); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
 "maps": [
  {
   "hfov": 20.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 200
     }
    ]
   },
   "pitch": -14.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.4,
   "image": "this.AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
   "pitch": -24.93,
   "yaw": 90.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
 "data": {
  "label": "Circle Point 01b"
 },
 "maps": [
  {
   "hfov": 5.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_18EC9DC6_0BE5_69A7_41A1_693B0510F3E2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
 "maps": [
  {
   "hfov": 37.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 199
     }
    ]
   },
   "pitch": -10.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
 "maps": [
  {
   "hfov": 67.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_1_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 158
     }
    ]
   },
   "pitch": -0.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
   "pitch": -14.38,
   "yaw": 22.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
 "maps": [
  {
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -14.38
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
 "maps": [
  {
   "hfov": 66.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 148
     }
    ]
   },
   "pitch": -7.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
 "maps": [
  {
   "hfov": 74.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 173
     }
    ]
   },
   "pitch": -3.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
 "maps": [
  {
   "hfov": 38.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 199
     }
    ]
   },
   "pitch": -0.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
   "pitch": -25.03,
   "yaw": 66.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
 "maps": [
  {
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -25.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8,
   "image": "this.AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
   "pitch": -24.92,
   "yaw": -57.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
 "maps": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -24.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.78,
   "image": "this.AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
   "pitch": -12.22,
   "yaw": -153.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
 "maps": [
  {
   "hfov": 7.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -12.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1AC93C29_0BE5_6EEA_419C_3219350E3B2F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
 "maps": [
  {
   "hfov": 46.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 97
     }
    ]
   },
   "pitch": -23.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_1AF21C15_0BE5_6EA5_4124_EAC19D5342C4); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
 "maps": [
  {
   "hfov": 18.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 200
     }
    ]
   },
   "pitch": -2.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1AC5DC33_0BE5_6EFE_4195_729232D9700A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
 "maps": [
  {
   "hfov": 47.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 144,
      "height": 200
     }
    ]
   },
   "pitch": -6.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_1AD82C47_0BE5_6EA6_4187_04A7B4E8BCA1); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
   "pitch": -16.02,
   "yaw": -167.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
 "maps": [
  {
   "hfov": 7.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1ADFCC3D_0BE5_6EEA_419F_95FB7111242C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
   "pitch": -22.04,
   "yaw": 133.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
 "maps": [
  {
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -22.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_1ACFAC1F_0BE5_6EA5_4179_19E2C0D70E8A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.74,
   "image": "this.AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
   "pitch": -10.24,
   "yaw": 122.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
 "maps": [
  {
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -10.24
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_18FEDDE1_0BE5_699D_416C_64FB90765640); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EB6F7DCD_E647_2976_41E0_3A09E20D7520",
 "maps": [
  {
   "hfov": 62.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 186,
      "height": 200
     }
    ]
   },
   "pitch": -3.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_18CEADF0_0BE5_697B_4190_7D2411198AA8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_FA7A4552_E648_F912_41D8_6CED06E3D3C6",
   "pitch": -19.55,
   "yaw": -6.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F14A027E_E64B_1B12_41E0_619255D25C94",
 "maps": [
  {
   "hfov": 5.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -19.55
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_18744E7F_0BE5_6B65_418E_9A3F283E36CF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.59,
   "image": "this.AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
   "pitch": -21.12,
   "yaw": -123.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F255C89C_E647_3716_41D6_45837819D966",
 "maps": [
  {
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -21.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_1846BE8F_0BE5_6BA6_4193_07D5C3FCE5CA); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
 "maps": [
  {
   "hfov": 49.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 196,
      "height": 200
     }
    ]
   },
   "pitch": -4.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_1856CE9E_0BE5_6BA7_418A_8C4CB8BF701A); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
 "maps": [
  {
   "hfov": 94.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 135
     }
    ]
   },
   "pitch": -3.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_18273EAF_0BE5_6BE5_41A4_DC8A869C6852); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.16,
   "image": "this.AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
   "pitch": -25.11,
   "yaw": 149.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F091E393_E6D9_7912_41EA_45A20199469E",
 "maps": [
  {
   "hfov": 6.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -25.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_18922E5B_0BE5_6AAE_417F_DBE8CA8977E2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
 "maps": [
  {
   "hfov": 82.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 187
     }
    ]
   },
   "pitch": -0.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_1864AE6A_0BE5_6B6E_41A2_BBCD7007F87D); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.95,
   "image": "this.AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
   "pitch": -23.43,
   "yaw": -7.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
 "maps": [
  {
   "hfov": 7.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -23.43
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_19ACFD3A_0BE5_6EEF_41A3_A23EF31ADEFA); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.04,
   "image": "this.AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
   "pitch": -15.86,
   "yaw": 44.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
 "maps": [
  {
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -15.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_19BC1D44_0BE5_6E9B_419B_7598F87E01F1); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
 "maps": [
  {
   "hfov": 45.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 189,
      "height": 200
     }
    ]
   },
   "pitch": -0.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
 "maps": [
  {
   "hfov": 20.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 170,
      "height": 160
     }
    ]
   },
   "pitch": -0.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.64,
   "image": "this.AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
   "pitch": -10.17,
   "yaw": 77.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
 "maps": [
  {
   "hfov": 3.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -10.17
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_1AD4EC51_0BE5_6EBA_41A3_E863B5E23F80); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.3,
   "image": "this.AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
   "pitch": -34.48,
   "yaw": -90.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
 "maps": [
  {
   "hfov": 10.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -34.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_1AADCC5C_0BE5_6EAA_41A1_346A8AA521D0); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
 "maps": [
  {
   "hfov": 92.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 187
     }
    ]
   },
   "pitch": -9.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_1AA34C65_0BE5_6E9A_417E_95926074D9C3); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.15,
   "image": "this.AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
   "pitch": -16.92,
   "yaw": 38.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
 "maps": [
  {
   "hfov": 6.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_1AB81C6F_0BE5_6F66_4196_AFC6EAEF4BD7); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
 "maps": [
  {
   "hfov": 37.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 163,
      "height": 200
     }
    ]
   },
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
 "maps": [
  {
   "hfov": 65.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 138
     }
    ]
   },
   "pitch": -1.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.16,
   "image": "this.AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
   "pitch": -13.75,
   "yaw": -32.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
 "maps": [
  {
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -13.75
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_1A5A8CC9_0BE5_6FAD_41A5_1B3DAE12A507); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
 "maps": [
  {
   "hfov": 32.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 200
     }
    ]
   },
   "pitch": -0.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1A2E3CD3_0BE5_6FBD_41A5_A0F2FC4CB06D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
 "maps": [
  {
   "hfov": 41.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 83
     }
    ]
   },
   "pitch": -20.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1A24ECDE_0BE5_6FA7_419E_C7AAC23F0164); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
 "maps": [
  {
   "hfov": 28.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 200
     }
    ]
   },
   "pitch": -2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_1A0D1CF3_0BE5_6F7D_4190_71C4AB1DAB13); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.76,
   "image": "this.AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
   "pitch": -10,
   "yaw": -131.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
 "maps": [
  {
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -10
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1A388CE8_0BE5_6F6B_419F_057FAA9ACD0C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.11,
   "image": "this.AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
   "pitch": -21.17,
   "yaw": -146.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
 "maps": [
  {
   "hfov": 10.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.55,
   "image": "this.AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
   "pitch": -16.16,
   "yaw": 158.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.25,
   "image": "this.AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
   "pitch": 0.55,
   "yaw": 169.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
 "maps": [
  {
   "hfov": 3.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.55
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_1A90DC97_0BE5_6FA5_41A0_AA968312C91E); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
 "maps": [
  {
   "hfov": 64.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 162
     }
    ]
   },
   "pitch": -1.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1A7B9CAB_0BE5_6FED_4190_FC6E315E366D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
 "maps": [
  {
   "hfov": 53.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 159,
      "height": 200
     }
    ]
   },
   "pitch": -0.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.1,
   "image": "this.AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
   "pitch": -13.38,
   "yaw": -98.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
 "maps": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_1A469CBF_0BE5_6FE5_4199_7F3B50A4F4F5); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
   "pitch": -11.37,
   "yaw": -55.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -11.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_1A709CB5_0BE5_6FE5_4153_323F5A86E1CF); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.46,
   "image": "this.AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
   "pitch": -26.44,
   "yaw": -62.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
 "maps": [
  {
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -26.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_1A65DCA1_0BE5_6F9D_4184_0EAD25EF3137); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.85,
   "image": "this.AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
   "pitch": -19.41,
   "yaw": 5.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
 "maps": [
  {
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -19.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_1A8FBC79_0BE5_6F6A_4193_4F2B6D8685CC); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.53,
   "image": "this.AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
   "pitch": 3.71,
   "yaw": 172.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
 "maps": [
  {
   "hfov": 9.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_1A846C84_0BE5_6F9A_41A0_8AB40C3A94D4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
 "maps": [
  {
   "hfov": 30.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 200
     }
    ]
   },
   "pitch": -2.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_1A995C8E_0BE5_6FA6_41A7_444EF330DBF7); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
 "maps": [
  {
   "hfov": 16.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_11_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 200
     }
    ]
   },
   "pitch": -1.82
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_19C87D25_0BE5_6EE5_4188_16A514CFA325); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
   "pitch": -16.4,
   "yaw": 82.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_19E42D12_0BE5_6EBF_41A4_7921AD20935F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.66,
   "image": "this.AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
   "pitch": -23.8,
   "yaw": 154.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
 "maps": [
  {
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_1A00FCFE_0BE5_6F67_4173_794CCF992A88); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
   "pitch": -9.62,
   "yaw": 144.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E72758A0_F261_12F4_41AB_217536E83188",
 "maps": [
  {
   "hfov": 8.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -9.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_19D99D30_0BE5_6EFB_4198_5088D73A5F0E); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
 "maps": [
  {
   "hfov": 34.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 163,
      "height": 200
     }
    ]
   },
   "pitch": -0.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_19F55D1B_0BE5_6EAD_4192_FC2911423F03); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
 "maps": [
  {
   "hfov": 34.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 102,
      "height": 200
     }
    ]
   },
   "pitch": -1.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_1A12ED08_0BE5_6EAB_4147_5A141DE4EC08); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
 "maps": [
  {
   "hfov": 24.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 200
     }
    ]
   },
   "pitch": -1.07
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_199CDBB2_0BE5_69FF_4197_12DDD51B7B32); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
 "maps": [
  {
   "hfov": 62.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 148,
      "height": 200
     }
    ]
   },
   "pitch": -2.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_19926BBB_0BE5_69ED_4174_ADD9490CC3DE); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
 "maps": [
  {
   "hfov": 28.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 68,
      "height": 200
     }
    ]
   },
   "pitch": -2.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_19863BA8_0BE5_69EB_4184_F8FF625EF95A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
 "maps": [
  {
   "hfov": 27.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 187
     }
    ]
   },
   "pitch": 13.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.46,
   "image": "this.AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
   "pitch": -1.55,
   "yaw": -6.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
 "maps": [
  {
   "hfov": 5.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -1.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_19676BC5_0BE5_69A5_41A3_44F2E78533DF); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.51,
   "image": "this.AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
   "pitch": -26.86,
   "yaw": 178.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
 "maps": [
  {
   "hfov": 3.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -26.86
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_198EDD4E_0BE5_6EA7_41A3_74917CD7746B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
 "maps": [
  {
   "hfov": 34.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 131,
      "height": 200
     }
    ]
   },
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.87,
   "image": "this.AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
   "pitch": -0.85,
   "yaw": -144.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
 "maps": [
  {
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
 "maps": [
  {
   "hfov": 59.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 177
     }
    ]
   },
   "pitch": -9.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_19912D66_0BE5_6967_419C_856FB5546BD1); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
 "maps": [
  {
   "hfov": 29.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 141,
      "height": 200
     }
    ]
   },
   "pitch": -3.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_19572D90_0BE5_69BB_418C_77FFC5E4A36A); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
 "maps": [
  {
   "hfov": 28.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -5.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_19758D7B_0BE5_696D_4192_19DD8F1BA450); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.96,
   "image": "this.AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
   "pitch": -16.27,
   "yaw": 135.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
 "maps": [
  {
   "hfov": 10.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_19478D85_0BE5_69A5_4180_863283A2F77F); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
 "maps": [
  {
   "hfov": 67.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 189,
      "height": 200
     }
    ]
   },
   "pitch": 7.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.8,
   "image": "this.AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
   "pitch": -29.85,
   "yaw": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5012374_F261_165C_41E2_26D991B3488F",
 "maps": [
  {
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -29.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_19649D70_0BE5_697B_419B_AA69F783DEF6); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
   "pitch": -17.12,
   "yaw": 32.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
 "maps": [
  {
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -17.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_1928FD9C_0BE5_69AB_41A2_63E004B21798); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.63,
   "image": "this.AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
   "pitch": -18.24,
   "yaw": -39.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
 "maps": [
  {
   "hfov": 5.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -18.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_19804D59_0BE5_6EAD_4180_741F8EE034F0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.49,
   "image": "this.AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
   "pitch": -16.89,
   "yaw": -158,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EACCB364_F261_367C_41CD_A12E896F212C",
 "maps": [
  {
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.89
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_197E7BCF_0BE5_69A5_4195_A0C2D4AFCC21); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.77,
   "image": "this.AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
   "pitch": -33.33,
   "yaw": 175.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
 "maps": [
  {
   "hfov": 3.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -33.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_1973BBD8_0BE5_69AB_4193_E5BB6A403899); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
 "maps": [
  {
   "hfov": 30.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 99,
      "height": 200
     }
    ]
   },
   "pitch": -7.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.61,
   "image": "this.AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
   "pitch": -0.87,
   "yaw": 2.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFD33961_E647_292E_41E2_4E840151C994",
 "maps": [
  {
   "hfov": 7.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -0.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_19475BE3_0BE5_699D_4176_B22AD95AB51B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
 "maps": [
  {
   "hfov": 38.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 184,
      "height": 200
     }
    ]
   },
   "pitch": 22.61
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 46.5,
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0",
 "distance": 33.82,
 "inertia": false
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 66,
 "colCount": 4,
 "id": "AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FA7A4552_E648_F912_41D8_6CED06E3D3C6",
 "levels": [
  {
   "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ]
}],
 "start": "this.init(); this.set('mute', true)",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Player",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 20,
 "width": "100%",
 "data": {
  "name": "Player451"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
