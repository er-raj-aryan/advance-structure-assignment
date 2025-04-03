import React, { useState } from 'react';

const TreeNode = ({ node, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ 
      marginLeft: `${level * 15}px`,
      borderLeft: level > 0 ? '1px dashed #ccc' : 'none'
    }}>
      <div 
        onClick={hasChildren ? toggleExpand : undefined}
        style={{
          padding: '8px 12px',
          cursor: hasChildren ? 'pointer' : 'default',
          backgroundColor: level % 2 === 0 ? '#f8f9fa' : '#ffffff',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '4px',
          margin: '2px 0',
          transition: 'background-color 0.2s',
          ':hover': {
            backgroundColor: '#e9ecef'
          }
        }}
      >
        {hasChildren && (
          <span style={{ 
            marginRight: '8px',
            fontSize: '0.8em',
            transition: 'transform 0.2s',
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)'
          }}>
            ▶
          </span>
        )}
        <span>{node.label}</span>
      </div>
      {hasChildren && isExpanded && (
        <div style={{ marginTop: '4px' }}>
          {node.children.map(childNode => (
            <TreeNode 
              key={childNode.id} 
              node={childNode} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div style={{
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px',
      fontFamily: 'Arial, sans-serif',
      padding: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {data.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

// Example usage with deeply nested data
const DynamicTreeAccordion = () => {
  const treeData = [
    {
      id: 'grid',
      label: 'Data Grid',
      children: [
        { id: 'grid-community', label: '@custom/data-grid' },
        { id: 'grid-pro', label: '@custom/data-grid-pro' },
        { 
          id: 'grid-premium', 
          label: '@custom/data-grid-premium', 
          children: [
            { 
              id: 'premium-features', 
              label: 'Premium Features',
              children: [
                { id: 'feature-1', label: 'Advanced Filtering' },
                { id: 'feature-2', label: 'Custom Themes' },
                { 
                  id: 'feature-3', 
                  label: 'Enterprise Support',
                  children: [
                    { id: 'support-1', label: '24/7 Support' },
                    { id: 'support-2', label: 'Dedicated Manager' }
                  ]
                }
              ]
            },
            { id: 'pickers-community', label: '@custom/date-pickers' },
            { id: 'pickers-pro', label: '@custom/date-pickers-pro' }
          ] 
        }
      ]
    },
    {
      id: 'charts',
      label: 'Charts',
      children: [
        { id: 'charts-community', label: '@custom/charts' },
        { 
          id: 'charts-pro', 
          label: '@custom/charts-pro',
          children: [
            { id: 'chart-types', label: 'Chart Types' },
            { id: 'animations', label: 'Animations' }
          ]
        }
      ]
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* <h2 style={{ color: '#333', marginBottom: '20px' }}>Dynamic Tree Accordion</h2> */}
      <TreeView data={treeData} />
    </div>
  );
};

export default DynamicTreeAccordion;