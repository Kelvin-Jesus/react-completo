import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {

    const [ currentActive, setCurrentActive ] = React.useState(0);
    const [ currentPosition, setCurrentPosition ] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect()
        setCurrentPosition(-(width * currentActive));
        console.log(currentActive)
    }, [currentActive]);

    const slidePrev = () => {
        if ( currentActive <= 0 ) { 
            setCurrentActive(slides.length - 1)
            return;
        }
        setCurrentActive(currentActive - 1)
    }

    const slideNext = () => {
        if ( currentActive >= slides.length - 1 ) {
            setCurrentActive(0)
            return;
        }
        setCurrentActive(currentActive + 1)
    }

    return (
        <section className={styles.container}>
            <div 
                ref={contentRef} 
                className={styles.content} 
                style={{ transform: `translate3d(${currentPosition}px, 0, 0)` }}
            >
                { slides.map(slide => <div className={styles.item} key={slide.key}>{slide.text}</div>) }
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    );

}

export default Slide;