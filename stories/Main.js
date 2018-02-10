import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

/* eslint-disable */

storiesOf('FullHeader', module)
    .add('Custom title.', () => (
        <FullHeader title="Title" />
    ))
    .add("Custom title and subtitle.", () => (
        <FullHeader title="Title" subtitle="Subtitle" />
    ))
    .add("Custom title, subtitle and background-color.", () => (
        <FullHeader title="Title" subtitle="Subtitle" bgColor="red" />
    ))
    .add("Custom title, subtitle, background-color and font-color.", () => (
        <FullHeader title="Title" subtitle="Subtitle" bgColor="red" fontColor="white"/>
    ))
    .add("Custom title, subtitle, background-color, font-color and font-family.", () => (
        <FullHeader title="Title" subtitle="Subtitle" bgColor="red" fontColor="white" fontFamily="roboto"/>
    ))
    .add("Custom title, subtitle, background-image font-color and font-family.", () => (
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgImage="https://images1.pixlis.com/background-image-checkers-chequered-checkered-squares-seamless-tileable-solid-pink-pale-leaf-236jpf.png"
            fontColor="white"
            fontFamily="Roboto"
        />
    ))
    .add("Custom title, subtitle, background-video font-color and font-family.", () => (
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            video="https://www.w3schools.com/tags/movie.mp4"
            fontColor="white"
            fontFamily="Roboto"
        />
    ))
