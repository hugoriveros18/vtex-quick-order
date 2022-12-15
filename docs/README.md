# Quick Order

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Quick Order component add an item by the SkuId and redirects automatically to the checkout page. It can be declare at any page of the website.

<img src="../react/assets/quick-order.png" width="auto"/> 


## Configuration 

### Step 1 - Adding the Quick Order app to your theme's dependencies

In your theme's `manifest.json`, add the Quick Order app as a dependency:

```json
  "dependencies": {
    "itgloberspartnercl.quick-order": "0.x"
  }
```

### Step 2 - Declaring the block on the page you want it to be displayed

Now, you can use the block exported by the `quick-order` app.

#### `quick-order` blocks
 Block name   | Description  |
| -------- | ------------------------ |
| `quick-order`     |  ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Render the component with a title, an input field to type the SkuId, and a button to add the item to the cart and redirect the page to the checkout. It can be use at any page of the website.                                      

```json
  "header.full": {
    "blocks": [
        "header-layout.desktop"
    ]
  },
  "header-layout.desktop": {
    "children": [
        "quick-order"
    ]
  }
```

### Step 2 - Defining the props that the component will have

Check all props to configure the block in the table below:

### `quick-order` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `quickOrderTitle`      | `string`       | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)The quickOrderTitle prop defines the title of the component, if you do not want to show it you must define it with an empty string. | `Quick Order`        |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `quick__order--container` |
| `quick__order--title` |
| `quick__order--form-container` |
| `quick__order--input-container` |
| `quick__order--form-label` |
| `quick__order--form-input` |
| `quick__order--form-submit` |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

1. Hugo Felipe Riveros Fajardo

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
