import { Editor as CoreEditor } from '@editfish/core'
import Vue from 'vue'

export class Editor extends CoreEditor {
  public contentComponent: Vue | null = null
}
