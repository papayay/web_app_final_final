import React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 3 }}>
      <CardContent>
        <IconButton aria-label="settings" sx={{ float: 'right' }}>
          <MoreVert />
        </IconButton>
        <Avatar 
          alt={user.name} 
          src={user.avatar} 
          sx={{ width: 56, height: 56, mb: 2 }}
        />
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {user.bio}
        </Typography>
        {/* Social Icons */}
        {user.social.facebook && (
          <IconButton aria-label="facebook" component="a" href={user.social.facebook} target="_blank">
            <Favorite /> {/* Replace with Facebook Icon */}
          </IconButton>
        )}
        {user.social.twitter && (
          <IconButton aria-label="twitter" component="a" href={user.social.twitter} target="_blank">
            <Share /> {/* Replace with Twitter Icon */}
          </IconButton>
        )}
        {/* Include other social icons as needed */}
      </CardContent>
    </Card>
  );
};

// Example usage of UserCard
const UserProfile = () => {
  // Sample user data
  const userData = {
    name: 'Samuel Robinson',
    avatar: 'path_to_avatar_image',
    bio: 'Hello! I am Sam, creating beautiful interfaces is my passion. I love reading, nature and music.',
    social: { 
      facebook: 'link_to_facebook',
      twitter: 'link_to_twitter',
      linkedin: 'link_to_linkedin'
    }
  }; // This bracket was missing

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
    <UserCard user={userData} />
    {/* Repeat <UserCard /> for other users */}
    </Box>
    );
    };
    
    export default UserProfile;
