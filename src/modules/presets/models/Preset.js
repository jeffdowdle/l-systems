export default class Preset {
  constructor(data) {
    this.lsystem = {};
    this.renderer = {};

    if (data && data.lsystem) {
      this.lsystem = data.lsystem;
    }

    if (data && data.renderer) {
      this.renderer = data.renderer;
    }
  }

  get iterations() {
    return this.lsystem.iterations || 1;
  }

  get axiom() {
    return this.lsystem.axiom || '';
  }

  get rules() {
    return this.lsystem.rules || [];
  }

  get rendererType() {
    return this.renderer.type || null;
  }

  get params() {
    return this.renderer.params || {};
  }
}
