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

```js
    const menu = [
                    {
                        heading: 'Core',
                    },
                    {
                        icon: <i className="fas fa-tachometer-alt"></i>,
                        name: 'Dashboard',
                        href: '/dashboard',
                    },
                 ]
    for (let index = 1; index < 20; index++) {
      if (index % 4 === 0) x.push({ heading: `Layout Core ${index / 4}` })
      menu.push({
        icon: <i className="fas fa-columns"></i>,
        name: `Layout ${index}`,
        href: `/layout-${index}`,
        subMenu: [
          {
            name: 'Menu 1',
            href: '/menu-1',
          },
          {
            name: 'Menu 2',
            href: '/menu-2',
          },
        ],
      })
    }
```

```jsx
import { SidebarContainer, SidebarProvider, useSidebar } from 'sidebar-menu-ui'
import 'sidebar-menu-ui/dist/scss/main.scss'

    <SidebarProvider>
        <SidebarContainer
            title={{ name: 'hello world', href: '/dashboard' }}
            menu={menu}
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



## Example Menu

### Heading
```js
{
    heading: 'Core',
},
```
### Single Menu
```js
{
    icon: <i className="fas fa-tachometer-alt"></i>,
    name: 'Dashboard',
    href: '/dashboard',
},
```
### Sub Menu
```js
{
    icon: <i className="fas fa-columns"></i>,
    name: 'Layout 1',
    href: '/layout-2',
    subMenu: [
        {
            name: 'Menu 1',
            href: '/menu-1',
        },
        {
            name: 'Menu 2',
            href: '/menu-2',
        },
    ]
},
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
            <td>SidebarProvider</td>
            <td></td>
            <td></td>
            <td>Provider container sidebar</td>
            <td></td>
        </tr>
        <tr>
            <td>useSidebar</td>
            <td></td>
            <td>Function</td>
            <td>Custom hook funtion for Toggle show or hide sidebar</td>
            <td></td>
        </tr>
        <tr>
            <td rowspan=4>SidebarContainer</td>
            <td>title</td>
            <td><code>Object</code></td>
            <td>Title project and routing</td>
            <td>null</td>
        </tr>
        <tr>
            <td>menu</td>
            <td><code>Array</code</td>
            <td>Mapping menu and Sub Menu</td>
            <td>[ ]</td>
        </tr>
        <tr>
            <td>navbar</td>
            <td><code>Boolean<code></td>
            <td>Navbar header</td>
            <td>false</td>
        </tr>
        <tr>
            <td>navbarRight</td>
            <td><code>ReactNode</code></td>
            <td>Custom navbar right side component</td>
            <td>null</td>
        </tr>
    </tbody>
</Table>

## License

MIT © [Doni Darmawan](bit.ly/darmawandoni6)
