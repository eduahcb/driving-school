
import GlobalStyle from '../src/styles/GlobalStyle'

const withGlobalStyle = (StoryFn) => (
  <>
    <GlobalStyle />
    <StoryFn />
  </>
)

const viewports = {
  extraSmall : {
    name: 'Protrair phone (default)',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  small : {
    name: 'Landscape phone (sm)',
    styles: {
      width: '640px',
      height: '360px'
    }
  },
  medium : {
    name: 'Tablet (medium)',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  large : {
    name: 'Desktop (lg)',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  extraLarge : {
    name: 'Large Desktop (xl)',
    styles: {
      width: '1280px',
      height: '800px'
    }
  }
}


export const decorators = [withGlobalStyle]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports
  }
}
