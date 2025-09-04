import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import apiSidebar from './docs/rpcapi/sidebar';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro', 
    {
      type: 'category',
      label: 'User Guides', 
      items: [
        {
          type: 'doc',
          id: 'user-guides/admin/admin-guide',
          label: 'Admin Portal Guide',
        },
        {
          type: 'doc',
          id: 'user-guides/business/business',
          label: 'Business Customers',
        },
        {
          type: 'doc',
          id: 'user-guides/private/private',
          label: 'Private Customers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration Guides',
      items: [
        'integrations/api-integration',      
        'integrations/authorizations',  
        'integrations/powerfox'
      ],
    },
    {
      type: 'category',
      label: 'API Documentation',
      items: apiSidebar,
    },
  ],
};

export default sidebars;