import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';

const title = new Title();
title.create('Primeira página');

const image = new Image();
image.insertImage();

const button = new Button();

button.create();
