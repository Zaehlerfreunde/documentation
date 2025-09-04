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
          label: "Creates an API token which is needed to call the API endpoints.",
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
          label: "Returns all partner spaces.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/create-space",
          label: "Creates a new space and returns the created space ID.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/delete-space",
          label: "Delete a space by ID. The devices connected to the space are also deleted.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/invite-user-to-space",
          label: "Invites a user to view a space. This allows the user to view all device data associated with the space.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/remove-user-from-space",
          label: "Removes a user from the space. This means he can no longer view space data.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/remove-all-users-from-space",
          label: "Removes all users from the space. This means that no one can view the space data anymore.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/add-device-to-space",
          label: "Add a specific device to a space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/remove-device-from-space",
          label: "Removes a specific device from a space.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/get-readings-by-space",
          label: "Returns meter readings of a space.",
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
          label: "Returns all users in a space.",
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
          label: "Returns all devices in a space.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/register-external-device",
          label: "Adds a new external device to a Space.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/store-readings",
          label: "Stores Meter Readings for one or more devices.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/delete-device",
          label: "Deletes a specific device.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rpcapi/get-readings-by-device",
          label: "Returns readings of a device.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rpcapi/register-inexogy-device",
          label: "Adds a new inexogy device to a space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/register-bluemetering-device",
          label: "Adds a new bluemetering device to a Space.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rpcapi/register-non-smart-meter",
          label: "Adds a new NonSmartMeter to a Space.",
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
          label: "Adds or updates a new or existing user contract for a certain parter.",
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
          label: "Stores Energy Prices.",
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
          label: "Creates a new or updates an existing customer",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
