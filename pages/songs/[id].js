import { playlist } from '../../data';
import { Box, Heading, Text, Button } from '@chakra-ui/core';
import NextLink from 'next/link';

export const getStaticProps = async ({ params }) => {
  const playlistList = playlist.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = playlist.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ song }) => (
  <Box mt={8}>
    <Heading fontWeight='800'>{song.name}</Heading>
    <Text color='grey.700' mb={4}>
      {song.artist}
    </Text>
    <iframe
      width='100%'
      height='315'
      src={`https://www.youtube.com/embed/${song.youtubeID}`}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
    <NextLink href='/' passHref>
      <Button as='a' mt={4} leftIcon='arrow-back'>
        Back
      </Button>
    </NextLink>
  </Box>
);
