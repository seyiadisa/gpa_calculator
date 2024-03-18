import Float "mo:base/Float";

actor {
  public query func calculate(gradePoints : Float, units : Int) : async Float {
    return gradePoints / Float.fromInt(units);
  };
};
