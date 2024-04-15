import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
