# Vodal
A vue modal with animations.
[Example](http://rodal.cn)

## Installation    

    yarn add vodal
    
## Usage
``` javascript
import Vue from 'vue';
import Vodal from 'vodal';

Vue.component(Vodal.name, Vodal);
```

## Props

Property|Type|Default|Description
---|---|---|---
width|number|400|width of dialog
height|number|240|height of dialog
measure|string|px|measure of width and height
show|bool|false|whether to show dialog
mask|bool|true|whether to show mask
closeButton|bool|true|whether to show close button
animation|string|zoom|animation type
duration|number|300|animation duration
className|string|/|className for the container

## Animation Types
* zoom
* fade
* flip
* door
* rotate
* slideUp
* slideDown
* slideLeft
* slideRight
