const {__} = wp.i18n;
const {Component, Fragment, createRef} = wp.element;
const {Placeholder, Spinner, PanelBody, SelectControl} = wp.components;
const {InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;

import btn1 from './button-presets/btn-1.png';
import btn2 from './button-presets/btn-2.png';
import btn3 from './button-presets/btn-3.png';
import btn4 from './button-presets/btn-4.png';
import btn5 from './button-presets/btn-5.png';
import btn6 from './button-presets/btn-6.png';
import btn7 from './button-presets/btn-7.png';

class Image_Choose extends Component {

    state = {
        value: this.props.value
    };

    render() {

        const images = [btn1, btn2, btn3, btn4, btn5, btn6, btn7];

        return (
            <div className="image-choose-wrap">
                {images.map((image, i) => {
                    i = i + 1;
                    return (
                        <label className={`image-choose-opt ${this.state.value == i ? 'active' : ''}`} htmlFor={`style_${i}`}>
                            <input type="radio" className="radio" id={`style_${i}`} name="switch_style" value={i}
                                onChange={() => {
                                    const val = document.getElementById(`style_${i}`).value;
                                    this.setState({
                                        value: val,
                                    });

                                    this.props.onChange(val);

                                }}
                            />

                            <img src={image} className="image-choose-img"/>
                        </label>
                    )
                })}
            </div>
        )
    }
}

export default Image_Choose;