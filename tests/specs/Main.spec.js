import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';


chai.use(chaiEnzyme());

describe('FullHeader component', () => {
    context('Somoke', () => {
        it('Should have header tag when mount.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("header")).to.have.length(1);
        });
    });
    context('Title property', () => {
        it('Should have h1 tag when title is parametrized.', () => {
            const wrapper = shallow(<FullHeader title="Title" />);
            expect(wrapper.find("h1")).to.have.length(1);
        });
        it('Should not have h1 tag when title is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("h1")).to.have.length(0);
        });
        it('Should have h1 tag with title when title property is parametrized.', () => {
            const wrapper = shallow(<FullHeader title="Title" />);
            expect(wrapper.find("h1").props().children).contains('Title');
        });
    });
    context('Subtitle property', () => {
        it('Should have h2 tag when subtitle property is parametrized.', () => {
            const wrapper = shallow(<FullHeader subtitle="Subtitle" />);
            expect(wrapper.find("h2")).to.have.length(1);
        });
        it('Should not have h2 tag when subtitle property is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
        it('Should have h2 tag with subtitle when subtitle property is parametrized.', () => {
            const wrapper = shallow(<FullHeader subtitle="Subtitle" />);
            expect(wrapper.find("h2").props().children).contains('Subtitle');
        });
    });
    context('BackgroundColor property', () => {
        it('Should have background-color equal #ccc when bgColor property is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });
        it('Should have background-color equal #000 when bgColor property is parametrized.', () => {
            const wrapper = shallow(<FullHeader bgColor="#000"/>);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });
    context('FontColor property', () => {
        it('Should have color equal #000 when fontColor property is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('color').equal('#000');
        });
        it('Should have color equal #000 when fontColor property is parametrized.', () => {
            const wrapper = shallow(<FullHeader fontColor="#000"/>);
            expect(wrapper).to.have.style('color').equal('#000');
        });
    });
    context('FontFamily property', () => {
        it('Should have font-family equal sans-serif when font property is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });
        it('Should have font-family equal #000 when font property is parametrized.', () => {
            const wrapper = shallow(<FullHeader font="Roboto"/>);
            expect(wrapper).to.have.style('font-family').equal('Roboto');
        });
    });
    context('BackgroundImage property', () => {
        it('Should have background-image equal url() when bgImage property is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });
        it('Should have background-image equal background.jpg when bgImage property is parametrized.', () => {
            const wrapper = shallow(<FullHeader bgImage="background.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(background.jpg)');
        });

    });
    context('Video property', () => {
        it('Should have video tag when video is parametrized.', () => {
            const wrapper = shallow(<FullHeader video="video.mp4" />);
            expect(wrapper.find("video")).to.have.length(1);
        });
        it('Should not have video tag when video is not parametrized.', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("video")).to.have.length(0);
        });
        it('Should have video tag with video when video property is parametrized.', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video').props().src).contains('my_video.mp4');
        });
    });
});
