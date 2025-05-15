import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "@/components/Button";

export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: "Click Me",
    color: "blue",
    size: "medium",
};

export const RedLargeButton = Template.bind({});
RedLargeButton.args = {
    label: "Click Me",
    color: "red",
    size: "large",
};


export const GreenSmallButton = Template.bind({});
GreenSmallButton.args = {
    label: "Click Me",
    color: "green",
    size: "small",
};
