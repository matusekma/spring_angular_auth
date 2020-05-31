package hu.bme.aut.resource;

import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

public class RedisInitializer extends AbstractHttpSessionApplicationInitializer {

    public RedisInitializer() {
        super(RedisConfig.class);
    }

}