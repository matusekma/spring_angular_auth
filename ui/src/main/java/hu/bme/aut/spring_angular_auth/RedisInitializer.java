package hu.bme.aut.spring_angular_auth;

import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

public class RedisInitializer extends AbstractHttpSessionApplicationInitializer {

    public RedisInitializer() {
        super(RedisConfig.class);
    }

}