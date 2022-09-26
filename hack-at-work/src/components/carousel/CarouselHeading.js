import { Github } from '@styled-icons/boxicons-logos/Github';

const h2Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


export default function CarouselHeading(props) {
    return (
        <>
            <h2 style={h2Style}>
                {props.title} 
                <a href={props.github}>
                    <Github size="7vw"/>
                </a>
            </h2>
        </>
    )
}