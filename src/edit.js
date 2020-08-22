import { __ } from '@wordpress/i18n';
import {
    RichText,
    AlignmentToolbar,
    BlockControls,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( props, loginBlockAttributes ) {

	const {
		attributes,
		className,
		setAttributes,
	} = props;

	return (
		<form className={ className } onSubmit={ (event) => event.preventDefault() }>
			<p className="login-username">
				<RichText
					tagName="label"
					placeholder={ loginBlockAttributes.labelUsername.default }
					keepPlaceholderOnFocus="true"
					formattingControls={ [ 'bold', 'italic' ] }
					onChange={ ( content ) => setAttributes( { labelUsername: content } ) }
                    value={ attributes.labelUsername }
                />
				<input
					type="text"
					className="input"
					placeholder={ __( 'Default username', 'twst-login-block' ) }
					onChange={ ( event ) => setAttributes( { defaultUsername: event.target.value } ) }
					value={ attributes.defaultUsername }
					size="20"
				/>
			</p>
			<p className="login-password">
				<RichText
					tagName="label"
					placeholder={ loginBlockAttributes.labelPassword.default }
					keepPlaceholderOnFocus="true"
					formattingControls={ [ 'bold', 'italic' ] }
                    onChange={ ( content ) => setAttributes( { labelPassword: content } ) }
                    value={ attributes.labelPassword }
                />
				<input type="password" className="input" size="20" readOnly />
			</p>
			<p className="login-remember">
				<label>
					<input
						type="checkbox"
						onChange={ ( event ) => setAttributes( { defaultRememberMe: event.target.value === "on" } ) }
						checked={ attributes.defaultRememberMe }
					/>
				</label>
				<RichText
					tagName="span"
					placeholder={ loginBlockAttributes.labelRememberMe.default }
					keepPlaceholderOnFocus="true"
					formattingControls={ [ 'bold', 'italic' ] }
                    onChange={ ( content ) => setAttributes( { labelRememberMe: content } ) }
                    value={ attributes.labelRememberMe }
                />
			</p>
			<p className="login-submit">
				<RichText
					tagName="div"
					className="wp-block-button__link"
					placeholder={ loginBlockAttributes.labelLogIn.default }
					keepPlaceholderOnFocus="true"
					formattingControls={ [] }
					onChange={ ( content ) => setAttributes( { labelLogIn: content } ) }
					onClick={ ( event ) => event.preventDefault() }
					onKeyPress={ ( event ) => event.preventDefault() }
                    value={ attributes.labelLogIn }
                />
			</p>
		</form>
	);
}
