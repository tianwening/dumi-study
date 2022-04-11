## Button

demo

```tsx
import React, { useState } from 'react'
import { Button } from 'dumi-demo';

export default () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <Button label="危险" danger />
        <Button label="默认" primary />
        <Button label={count + '事件'}  onclick={() => { setCount(count+1) }}/>
        <Button label="简单"/>
        </>
    )
} ;
```

<code src="../Foo/index.md"></code>
