class MathUtils {
    static Lerp(a, b, t) {
        return a + (b - a) * t;
    }

    static Clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    static Clamp01(value) {
        return MathUtils.Clamp(value, 0, 1);
    }

    static LerpAngle(a, b, t) {
        let num = MathUtils.Repeat(b - a, 360);
        if (num > 180) {
            num -= 360;
        }
        return a + num * t;
    }

    static Repeat(t, length) {
        return t - Math.floor(t / length) * length;
    }

    static PingPong(t, length) {
        t = MathUtils.Repeat(t, length * 2);
        return length - Math.abs(t - length);
    }

    static InverseLerp(a, b, value) {
        if (a != b) {
            return MathUtils.Clamp01((value - a) / (b - a));
        }
        return 0;
    }

    static MoveTowards(current, target, maxDelta) {
        if (Math.abs(target - current) <= maxDelta) {
            return target;
        }
        return current + Math.sign(target - current) * maxDelta;
    }

    static Englishfy(number, singular, plural) {
        if (number == 1) {
            return number + " " + singular;
        }
        return number + " " + plural;
    }
}