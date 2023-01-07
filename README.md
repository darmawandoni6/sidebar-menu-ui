# [Sidebar Menu UI](https://www.npmjs.com/package/sidebar-menu-ui)

Free simple UI sidebar ready to use.

## Demo

[Live preview](https://demo-sidebar-menu-ui.netlify.app)

## Screenshot

![react-pro-sidebar](https://demo-sidebar-menu-ui.netlify.app/Screen%20Shot%202023-01-07%20at%2015.26.56.png)

## Installation

### npm

```bash
npm i sidebar-menu-ui
```

## Requirement

- node versin >= 14
- React >= 18
- React Router Dom >= 6
- sass

## Usage

1. copas Font Awesome in index.html

```html
....
<head>
  ...
  <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
  ...
</head>
```

2. Create code. Example :

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sample from './Sample'

    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Sample />} />
        </Routes>
    </BrowserRouter>
```

```jsx
import { SidebarContainer, SidebarProvider, useSidebar } from 'sidebar-menu-ui'
import 'sidebar-menu-ui/dist/scss/main.scss'

    <SidebarProvider>
        <SidebarContainer
            title={{ name: 'hello world', href: '/dashboard' }}
            menu={dummy}
            navbar
            navbarRight={<>lorem ipsum</>}
        >
            <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Test />} />
            </Routes>
        </SidebarContainer>
    </SidebarProvider>;
    
```

## Custom Styling

There are sets of sass variables available which you can override to define your own styles

You need to include your override variables before importing the scss file

Your `custom.scss` file should look something like this

```scss
// Your variable overrides
$background-color-sidebar: red;


@import 'node_modules/sidebar-menu-ui/dist/scss/main.scss';
```

Available scss variables

```scss
$background-color-sidebar: #212529 !default;
$background-color-footer: #343a40 !default;
$font-color-sidebar: rgba(255, 255, 255, 0.5) !default;
$font-color: white !default;

$sidebar-width: 225px !default;
$header-height: 56px !default;
$padding-content: 1.5rem !default;

```

## API

<Table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>SidebarContainer</td>
            <td>title</td>
            <td>Object</td>
            <td>title project and routing</td>
            <td>null</td>
        </tr>
        <tr>
            <td>menu</td>
            <td>Array</td>
            <td>Mapping menu and Sub Menu</td>
            <td>[]</td>
        </tr>
        <tr>
            <td>navbar</td>
            <td>Boolean</td>
            <td>Navbar header</td>
            <td>false</td>
        </tr>
        <tr>
            <td>navbarRight</td>
            <td>ReactNode</td>
            <td>custom navbar right side component</td>
            <td>null</td>
        </tr>
    </tbody>
</Table>

## License

MIT © [Doni Darmawan](bit.ly/darmawandoni6)
