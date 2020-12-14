interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    color: '#ccc',
};

const rect2: Rect = {
    id: '2000',
    size: {
        width: 10,
        height: 40,
    }
};
rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ================================================== //

interface RectWihtArea extends Rect {
    getArea: () => number
}

const rect5: RectWihtArea = {
    id: '1241',
    size: {
        width: 11,
        height: 44,
    },
    getArea(): number {
        return this.size.width + this.size.height;
    }
};

// ==================== //
interface IClock {
    time: Date;
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date) {
        this.time = date;
    }
}

// ============================== //
interface Styles {
    [key: string]: string,
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
};
