import type { Schema, Attribute } from '@strapi/strapi';

export interface NameHello extends Schema.Component {
  collectionName: 'components_name_hellos';
  info: {
    displayName: 'Hello';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Description: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.String;
  };
}

export interface NameTestTest extends Schema.Component {
  collectionName: 'components_name_test_tests';
  info: {
    displayName: 'Test Test';
    icon: 'arrowDown';
  };
  attributes: {
    Description: Attribute.String;
    Link: Attribute.String;
  };
}

export interface PlaylistYoutubePlaylist extends Schema.Component {
  collectionName: 'components_playlist_youtube_playlists';
  info: {
    displayName: 'Playlist';
    icon: 'alien';
  };
  attributes: {
    Link: Attribute.String;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'name.hello': NameHello;
      'name.test-test': NameTestTest;
      'playlist-youtube.playlist': PlaylistYoutubePlaylist;
    }
  }
}
