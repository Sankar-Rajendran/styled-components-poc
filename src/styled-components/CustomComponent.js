import React from 'react';
import styled from 'styled-components';

const CustomComponent = (props) => (
	<div className={props.className}>
		<div>{props.body()}</div> 
	</div>
)

export const StyledComponent1 = styled(CustomComponent)`
	font-size: 20px;
    color: blue;
    height:200px`
    

export const StyledComponent2 = styled(CustomComponent)`
	font-size: 25px;
    color: red;
    height:200px
    border:1px solid #ffffff;`