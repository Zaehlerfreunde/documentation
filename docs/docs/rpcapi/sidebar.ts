import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rpcapi/zahlerfreunde-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "rpcapi/create-api-token",
          label: "Create auth token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Spaces",
      items: [
        {
          type: "doc",
          id: "rpcapi/get-spaces",
          label: "Get spaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/create-space",
          label: "Create space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/delete-space",
          label: "Delete space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/invite-user-to-space",
          label: "Invite user to space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/remove-user-from-space",
          label: "Remove user from space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/remove-all-users-from-space",
          label: "Remove all users from space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/add-device-to-space",
          label: "Link device to space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/remove-device-from-space",
          label: "Remove device from space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/get-readings-by-space",
          label: "Get space readings",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "rpcapi/get-users-in-space",
          label: "Get users by space",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Devices",
      items: [
        {
          type: "doc",
          id: "rpcapi/get-devices-in-space",
          label: "Get devices in space",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/register-external-device",
          label: "Create device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/store-readings",
          label: "Create readings",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/delete-device",
          label: "Delete device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/get-readings-by-device",
          label: "Get device readings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/register-inexogy-device",
          label: "Create inexogy device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/register-bluemetering-device",
          label: "Create BlueMetering device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/register-non-smart-meter",
          label: "Create non-smart-meter device",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      items: [
        {
          type: "doc",
          id: "rpcapi/add-update-external-user-contract",
          label: "Upsert contract",
          className: "menu__list-item--deprecated api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Energy-Prices",
      items: [
        {
          type: "doc",
          id: "rpcapi/store-energy-prices",
          label: "Create energy prices",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Customers",
      items: [
        {
          type: "doc",
          id: "rpcapi/add-update-customer",
          label: "Upsert customer",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
