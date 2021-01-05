import { List, Heading } from '@chakra-ui/core';

import { playlist } from '../data';
import Song from '../components/Song';

export const getStaticProps = async () => {
  return {
    props: {
      playlistLists: playlist,
    },
  };
};

export default ({ playlistLists }) => (
  <>
    <Heading mt={8} mb={4} fontWeight='800'>
      HipHop Playlist
    </Heading>
    <List>
      {playlistLists.map((playlistList) => (
        <Song key={playlistList.id} {...playlistList} />
      ))}
    </List>
  </>
);
