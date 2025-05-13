import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UsersList from "@/components/UsersList";
import { User } from "@/types/types";

export default {
    title: "Components/UsersList",
    component: UsersList,
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) =><main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <UsersList {...args} /></main >;

export const DefaultUsers = Template.bind({});
DefaultUsers.args = {
    users: [
        { id: 1, name: "John Doe", email: "john.doe@example.com", createdAt: "2025-05-01T12:00:00Z" },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", createdAt: "2025-05-02T12:00:00Z" },
    ],
};

export const EmptyUsers = Template.bind({});
EmptyUsers.args = {
    users: [],
};

export const SingleUser = Template.bind({});
SingleUser.args = {
    users: [
        { id: 1, name: "Alice", email: "alice@example.com", createdAt: "2025-05-03T12:00:00Z" },
    ],
};
