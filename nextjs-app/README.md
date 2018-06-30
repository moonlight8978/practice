Next.js = Background, with React on top of it.

It handles SSR (server side rendering), routing, ...

##### Install

```bash
$ yarn add react react-dom next node-sass @zeit/next-css @zeit/next-sass
```

Wait until the installation finish. Then add the following object to `package.json`

```json
{
  "scripts": {
    "dev": "next"
  }
}
```

##### Add CSS, SASS import

```shell
$ echo "const withSass = require('@zeit/next-sass')\nconst withCSS = require('@zeit/next-css')\nmodule.exports = withCSS(withSass())" > next.config.js
```

More pre-processor: see [here](https://github.com/zeit/next.js/#importing-css--sass--less--stylus-files)

##### Run dev server

Make sure your project has `./pages` folder

```shell
$ mkdir pages
```

And then

```shell
$ yarn dev
```

##### Reserved folder name

* `./pages`
* `./static`

##### Static resources

`./static` folder will be mapped to `/static` automatically.

For example: To access `./static/data.json`, make a HTTP request to `/static/data.json`

##### Routing

Every files in `./pages` will be mapped to the corresponding path. Except `index.js`, the others can be `.jsx`

For example:

* `./pages/index.js` => `/`
* `./pages/item.js` => `/item`

For dynamic routing: Use the `withRoute` HOC, you can access `router` from props.

```jsx
import { withRouter } from 'next/router'

function Item({ router }) {
  // do something
}

export default withRouter(Item)
```

Notable `router`'s  property:

* `pathname`

* `query`

Links: Use `Link` component, pass `href` props. Inside the component, you can use any element which can listen to `onClick` event.

```jsx
import Link from 'next/link'
// codes...
export default function() {
  return (
  	<div>
    	// codes
      <Link href={`/item?id=${id}`}>
        <a>{item.name}</a>
      </Link>
    </div>
  )
}
```

##### Add libraries to project

We need to custom the `Head` component

```jsx
import Head from 'next/head'

import "bootstrap/dist/css/bootstrap.min.css"

export default function() {
  return (
  	<div>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>

      // codes...
    </div>
  )
}
```

Note that `/_next/static/style.css` is the application stylesheet which is compiled from the SASS files.
