import * as _231 from "./applications/transfer/v1/genesis";
import * as _232 from "./applications/transfer/v1/query";
import * as _233 from "./applications/transfer/v1/transfer";
import * as _234 from "./applications/transfer/v1/tx";
import * as _235 from "./applications/transfer/v2/packet";
import * as _236 from "./core/channel/v1/channel";
import * as _237 from "./core/channel/v1/genesis";
import * as _238 from "./core/channel/v1/query";
import * as _239 from "./core/channel/v1/tx";
import * as _240 from "./core/client/v1/client";
import * as _241 from "./core/client/v1/genesis";
import * as _242 from "./core/client/v1/query";
import * as _243 from "./core/client/v1/tx";
import * as _244 from "./core/commitment/v1/commitment";
import * as _245 from "./core/connection/v1/connection";
import * as _246 from "./core/connection/v1/genesis";
import * as _247 from "./core/connection/v1/query";
import * as _248 from "./core/connection/v1/tx";
import * as _249 from "./core/port/v1/query";
import * as _250 from "./core/types/v1/genesis";
import * as _251 from "./lightclients/localhost/v1/localhost";
import * as _252 from "./lightclients/solomachine/v1/solomachine";
import * as _253 from "./lightclients/solomachine/v2/solomachine";
import * as _254 from "./lightclients/tendermint/v1/tendermint";
import * as _464 from "./applications/transfer/v1/tx.amino";
import * as _465 from "./core/channel/v1/tx.amino";
import * as _466 from "./core/client/v1/tx.amino";
import * as _467 from "./core/connection/v1/tx.amino";
import * as _468 from "./applications/transfer/v1/tx.registry";
import * as _469 from "./core/channel/v1/tx.registry";
import * as _470 from "./core/client/v1/tx.registry";
import * as _471 from "./core/connection/v1/tx.registry";
import * as _472 from "./applications/transfer/v1/query.lcd";
import * as _473 from "./core/channel/v1/query.lcd";
import * as _474 from "./core/client/v1/query.lcd";
import * as _475 from "./core/connection/v1/query.lcd";
import * as _476 from "./applications/transfer/v1/query.rpc.query";
import * as _477 from "./core/channel/v1/query.rpc.query";
import * as _478 from "./core/client/v1/query.rpc.query";
import * as _479 from "./core/connection/v1/query.rpc.query";
import * as _480 from "./core/port/v1/query.rpc.query";
import * as _481 from "./applications/transfer/v1/tx.rpc.msg";
import * as _482 from "./core/channel/v1/tx.rpc.msg";
import * as _483 from "./core/client/v1/tx.rpc.msg";
import * as _484 from "./core/connection/v1/tx.rpc.msg";
import * as _534 from "./lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._231,
        ..._232,
        ..._233,
        ..._234,
        ..._464,
        ..._468,
        ..._472,
        ..._476,
        ..._481
      };
      export const v2 = { ..._235
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._236,
        ..._237,
        ..._238,
        ..._239,
        ..._465,
        ..._469,
        ..._473,
        ..._477,
        ..._482
      };
    }
    export namespace client {
      export const v1 = { ..._240,
        ..._241,
        ..._242,
        ..._243,
        ..._466,
        ..._470,
        ..._474,
        ..._478,
        ..._483
      };
    }
    export namespace commitment {
      export const v1 = { ..._244
      };
    }
    export namespace connection {
      export const v1 = { ..._245,
        ..._246,
        ..._247,
        ..._248,
        ..._467,
        ..._471,
        ..._475,
        ..._479,
        ..._484
      };
    }
    export namespace port {
      export const v1 = { ..._249,
        ..._480
      };
    }
    export namespace types {
      export const v1 = { ..._250
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._251
      };
    }
    export namespace solomachine {
      export const v1 = { ..._252
      };
      export const v2 = { ..._253
      };
    }
    export namespace tendermint {
      export const v1 = { ..._254
      };
    }
  }
}
export const ClientFactory = { ..._534
};