import React, { FC } from "react";
import { RecoilRoot } from "recoil";

const MockRecoilRoot: FC = (props) => <RecoilRoot>{props.children}</RecoilRoot>;

export { MockRecoilRoot };
