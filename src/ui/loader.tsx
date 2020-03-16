import React from "react";

import { BounceLoader } from "react-spinners";
import { css }  from "@emotion/core";

export const Loader: React.FC = () => {
	
	const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;
	
	return (
		<>
			<BounceLoader
				css={override}
				size={40}
				color={"#037BFF"}
			/>
		</>
	)
}