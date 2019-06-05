// 1. Copy and paste your prototype in here and refactor into class syntax.

//added "Mk2" so that it would not attempt to overwrite the class from prototypes

class CuboidMakerMk2 {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboidMk2 = new CuboidMakerMk2({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerMk2 {
  constructor(attributes) {
    super(attributes);
  }
  volOfCube() {
    return Math.pow(this.length, 3);
  }

  surfOfCube() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker({ length: 2, width: 2, height: 2 });
console.log(cube.volOfCube()); //8
console.log(cube.surfOfCube()); //24
