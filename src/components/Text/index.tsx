import React from 'react';

interface IText {
	as?: React.ElementType;
	children: React.ReactNode
}

export const Text = ({as, children} : IText) => {
	const Component = as || 'span';
	return <Component>{children}</Component>;
}

type colors = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'indigo'
type AsProps<C extends React.ElementType> = { as?: C }
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProps<C> & P);

// eslint-disable-next-line @typescript-eslint/ban-types
type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProps<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>
type TextProps = {
	color?: colors | 'black';
}
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>
type PolymorphicComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponentProps<C,P> & {
	ref?: PolymorphicRef<C>;
}
type TextComponent = <C extends React.ElementType>(props: PolymorphicComponentPropsWithRef<C, TextProps>) => React.ReactElement | null;

export const TestText: TextComponent = React.forwardRef(<C extends React.ElementType = 'span'>({
	as, style, color, children, ...restProps} : Props<C, TextProps>, ref?: PolymorphicRef<C>) => {
	const Component = as || 'span';
	const internalStyles = color ? {style: {...style, color}} : {}
	return <Component {...restProps} {...internalStyles} ref={ref}>{children}</Component>;
})

// typescript on
// OMIT, PICK, KEYOF
// type Vowels = {
// 	a: 'a',
// 	e: 'e',
// 	i: 'i',
// 	o: 'o',
// 	u: 'u'
// }

// type VowelsInOhandsObject = Pick<Vowels, 'a' | 'o'>;
// type VowelsNotInOhandsObject = Omit<Vowels, 'a' | 'o'>;
// type VowelInOhand = keyof Vowels;

// const favoriteVowels: VowelInOhand = 'a';

// console.log('favoriteVowels');
