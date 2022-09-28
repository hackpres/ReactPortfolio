import { Github } from '@styled-icons/boxicons-logos/Github';

const h2Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#243637',
    fontSize: '1.5rem',
    fontWeight: '100',
};
const iconStyle = {
    marginLeft: '.75rem',
}

export default function CarouselHeading(props) {
    return (
        <div style={h2Style}>
            <h2 style={h2Style}>
                {props.title} 
            </h2>
            <a href={props.github} >
                <Github size="7vw" color='#243637' style={iconStyle}/>
            </a>
        </div>
    )
}