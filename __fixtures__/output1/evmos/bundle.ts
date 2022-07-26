import * as _154 from "./claims/v1/claims";
import * as _155 from "./claims/v1/genesis";
import * as _156 from "./claims/v1/query";
import * as _157 from "./epochs/v1/genesis";
import * as _158 from "./epochs/v1/query";
import * as _159 from "./erc20/v1/erc20";
import * as _160 from "./erc20/v1/genesis";
import * as _161 from "./erc20/v1/query";
import * as _162 from "./erc20/v1/tx";
import * as _163 from "./fees/v1/fees";
import * as _164 from "./fees/v1/genesis";
import * as _165 from "./fees/v1/query";
import * as _166 from "./fees/v1/tx";
import * as _167 from "./incentives/v1/genesis";
import * as _168 from "./incentives/v1/incentives";
import * as _169 from "./incentives/v1/query";
import * as _170 from "./inflation/v1/genesis";
import * as _171 from "./inflation/v1/inflation";
import * as _172 from "./inflation/v1/query";
import * as _173 from "./recovery/v1/genesis";
import * as _174 from "./recovery/v1/query";
import * as _175 from "./vesting/v1/query";
import * as _176 from "./vesting/v1/tx";
import * as _177 from "./vesting/v1/vesting";
import * as _439 from "./erc20/v1/tx.amino";
import * as _440 from "./fees/v1/tx.amino";
import * as _441 from "./vesting/v1/tx.amino";
import * as _442 from "./erc20/v1/tx.registry";
import * as _443 from "./fees/v1/tx.registry";
import * as _444 from "./vesting/v1/tx.registry";
import * as _445 from "./claims/v1/query.lcd";
import * as _446 from "./epochs/v1/query.lcd";
import * as _447 from "./erc20/v1/query.lcd";
import * as _448 from "./fees/v1/query.lcd";
import * as _449 from "./incentives/v1/query.lcd";
import * as _450 from "./inflation/v1/query.lcd";
import * as _451 from "./recovery/v1/query.lcd";
import * as _452 from "./vesting/v1/query.lcd";
import * as _453 from "./claims/v1/query.rpc.query";
import * as _454 from "./epochs/v1/query.rpc.query";
import * as _455 from "./erc20/v1/query.rpc.query";
import * as _456 from "./fees/v1/query.rpc.query";
import * as _457 from "./incentives/v1/query.rpc.query";
import * as _458 from "./inflation/v1/query.rpc.query";
import * as _459 from "./recovery/v1/query.rpc.query";
import * as _460 from "./vesting/v1/query.rpc.query";
import * as _461 from "./erc20/v1/tx.rpc.msg";
import * as _462 from "./fees/v1/tx.rpc.msg";
import * as _463 from "./vesting/v1/tx.rpc.msg";
import * as _533 from "./lcd";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._445,
      ..._453
    };
  }
  export namespace epochs {
    export const v1 = { ..._157,
      ..._158,
      ..._446,
      ..._454
    };
  }
  export namespace erc20 {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._439,
      ..._442,
      ..._447,
      ..._455,
      ..._461
    };
  }
  export namespace fees {
    export const v1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._440,
      ..._443,
      ..._448,
      ..._456,
      ..._462
    };
  }
  export namespace incentives {
    export const v1 = { ..._167,
      ..._168,
      ..._169,
      ..._449,
      ..._457
    };
  }
  export namespace inflation {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._450,
      ..._458
    };
  }
  export namespace recovery {
    export const v1 = { ..._173,
      ..._174,
      ..._451,
      ..._459
    };
  }
  export namespace vesting {
    export const v1 = { ..._175,
      ..._176,
      ..._177,
      ..._441,
      ..._444,
      ..._452,
      ..._460,
      ..._463
    };
  }
}
export const ClientFactory = { ..._533
};