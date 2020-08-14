import styled from 'styled-components'

const Text = styled.h1`
      color:${props => props.color ? props.color : props.theme.body_600};
`

const CustomText = (props) => {
    const { children } = props
    return (
        <Text {...props}>
            {children}
        </Text>
    );
}

export default CustomText