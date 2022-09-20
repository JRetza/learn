/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { SocialMediaButton } from "../components/SocialMediaButton";
export declare type LearnFooterMobileCustomProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    socialMediaButtons: JSX.Element[];
  } & {
    submitGithubIssueButton: JSX.Element;
  } & {
    overrides?: EscapeHatchProps | undefined | null;
  }
>;
export default function LearnFooterCustomMobile(
  props: LearnFooterMobileCustomProps
): React.ReactElement;
