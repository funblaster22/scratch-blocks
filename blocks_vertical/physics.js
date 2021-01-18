'use strict';

goog.provide('Blockly.Blocks.physics');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['physics_activate'] = {
  /**
   * Block to activate physics.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PHYSICS_ENABLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SHAPE",
          "options": [
            [Blockly.Msg.PHYSICS_SHAPE_COSTUME, '_costume_'],
            [Blockly.Msg.PHYSICS_SHAPE_CIRCLE, '_circle_'],
            [Blockly.Msg.PHYSICS_SHAPE_POLYGON, '_polygon_'],
            [Blockly.Msg.PHYSICS_SHAPE_ALL, '_all_']
          ]
        },
        {
          "type": "field_dropdown",
          "name": "MODE",
          "options": [
            [Blockly.Msg.PHYSICS_MODE_NORMAL, '_normal_'],
            [Blockly.Msg.PHYSICS_MODE_PRECISION, '_precision_']
          ]
        }
      ],
      "category": Blockly.Categories.physics,
      "extensions": ["colours_physics", "shape_statement"]
    });
  }
};
