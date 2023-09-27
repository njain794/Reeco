// CommandBarHeader.styles.ts

export const commandBarHeaderStyles = {
  spacer: {
    flex: '1',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Occupy the full width
    backgroundColor: '#0078d4', // Customize the background color
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px', // Adjust the gap as needed
    backgroundColor: '#0078d4'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px', // Adjust the gap as needed
    backgroundColor: '#0078d4'
  },
  logo: {
    width: '32px', // Customize the logo size
    height: '32px', // Customize the logo size
  }
};
