const {__} = wp.i18n;
const {Component, Fragment, createRef} = wp.element;
const {Placeholder, Spinner, PanelBody, SelectControl} = wp.components;
const {InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;

import btn2_sun from './button-presets/btn-2-sun.png';
import btn2_moon from './button-presets/btn-2-moon.png';

import btn3_sun_light from './button-presets/btn-3/sun-light.png';
import btn3_sun_dark from './button-presets/btn-3/sun-dark.png';
import btn3_moon_dark from './button-presets/btn-3/moon-dark.png';
import btn3_moon_light from './button-presets/btn-3/moon-light.png';

import btn4_sun from './button-presets/btn-4/sun.png';
import btn4_moon from './button-presets/btn-4/moon.png';

import btn5_sun from './button-presets/btn-5/sun.png';
import btn5_moon from './button-presets/btn-5/moon.png';

import btn6_sun from './button-presets/btn-6/sun.png';
import btn6_moon from './button-presets/btn-6/moon.png';

import btn7_light from './button-presets/btn-7/light.png';
import btn7_dark from './button-presets/btn-7/dark.png';

class Button extends Component {

    render() {
        const {style} = this.props;

        return (
            <Fragment>
                <input type="checkbox" id="wp-dark-mode-switch" className="wp-dark-mode-switch"/>

                <div className={`wp-dark-mode-switcher wp-dark-mode-ignore style-${style}`}>
                    {
                        style === 2 ?
                            <label htmlFor="wp-dark-mode-switch">
                                <div className="toggle"></div>
                                <div className="modes">
                                    <img className="light" src={btn2_sun}/>
                                    <img className="dark" src={btn2_moon}/>
                                </div>
                            </label>
                            : style === 3 ?
                            <div>
                                <img className="sun-light" src={btn3_sun_light}/>
                                <img className="sun-dark" src={btn3_sun_dark}/>
                                <label htmlFor="wp-dark-mode-switch">
                                    <div className="toggle"></div>
                                </label>
                                <img className="moon-dark" src={btn3_moon_dark}/>
                                <img className="moon-light" src={btn3_moon_light}/>

                            </div> :
                            style === 4 ?
                                <div>
                                    <span>Light</span>
                                    <label htmlFor="wp-dark-mode-switch">
                                        <div className="modes">
                                            <img className="light" src={btn4_sun}/>
                                            <img className="dark" src={btn4_moon}/>
                                        </div>
                                    </label>
                                    <span>Dark</span>
                                </div>
                                :
                                style === 5 ?
                                    <div>
                                        <label htmlFor="wp-dark-mode-switch">
                                            <div className="modes">
                                                <img className="light" src={btn5_sun}/>
                                                <img className="dark" src={btn5_moon}/>
                                            </div>
                                        </label>
                                    </div>
                                    :
                                    style === 6 ?
                                        <div>
                                            <label htmlFor="wp-dark-mode-switch">
                                                <div className="modes">
                                                    <img className="light" src={btn6_sun}/>
                                                    <img className="dark" src={btn6_moon}/>
                                                </div>
                                            </label>
                                        </div>
                                        : style === 7 ?
                                        <div>
                                            <label htmlFor="wp-dark-mode-switch">
                                                <div className="modes">
                                                    <img className="light" src={btn7_light} />
                                                    <img className="dark" src={btn7_dark} />
                                                </div>
                                            </label>
                                        </div>
                                        :
                                        <div>
                                            <i className="wp-dark-mode-moon-o wp-dark-mode-moon-icon-size-small"></i>
                                            <i className="wp-dark-mode-light-up wp-dark-mode-moon-icon-size-small"></i>

                                            <label htmlFor="wp-dark-mode-switch">
                                                <div className="toggle"></div>
                                                <div className="modes">
                                                    <p className="light">Light</p>
                                                    <p className="dark">Dark</p>
                                                </div>
                                            </label>
                                        </div>
                    }

                </div>

            </Fragment>

        )
    }
}

export default Button;